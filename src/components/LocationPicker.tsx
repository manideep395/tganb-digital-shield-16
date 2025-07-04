
import React, { useState, useEffect } from 'react';
import { MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface LocationPickerProps {
  onLocationSelect: (location: { lat: number; lng: number; address: string }) => void;
  selectedLocation?: { lat: number; lng: number; address: string };
}

const LocationPicker: React.FC<LocationPickerProps> = ({ onLocationSelect, selectedLocation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const searchLocation = async (query: string) => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&countrycodes=in`
      );
      const results = await response.json();
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching location:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearchClick = () => {
    searchLocation(searchQuery);
  };

  const selectLocation = (result: any) => {
    const location = {
      lat: parseFloat(result.lat),
      lng: parseFloat(result.lon),
      address: result.display_name
    };
    onLocationSelect(location);
    setSearchResults([]);
    setSearchQuery(result.display_name);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const result = await response.json();
            const location = {
              lat: latitude,
              lng: longitude,
              address: result.display_name || `${latitude}, ${longitude}`
            };
            onLocationSelect(location);
            setSearchQuery(location.address);
          } catch (error) {
            console.error('Error getting address:', error);
            const location = {
              lat: latitude,
              lng: longitude,
              address: `${latitude}, ${longitude}`
            };
            onLocationSelect(location);
            setSearchQuery(location.address);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to get your current location. Please search for a location manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="flex-1 flex gap-2">
          <Input
            type="text"
            placeholder="Search for location (e.g., Hyderabad, Telangana)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSearchClick();
              }
            }}
          />
          <Button type="button" onClick={handleSearchClick} disabled={isSearching}>
            <Search className="w-4 h-4" />
          </Button>
        </div>
        <Button type="button" onClick={getCurrentLocation} variant="outline">
          <MapPin className="w-4 h-4 mr-2" />
          Current Location
        </Button>
      </div>

      {searchResults.length > 0 && (
        <div className="bg-white border rounded-lg shadow-lg max-h-48 overflow-y-auto z-50 relative">
          {searchResults.map((result, index) => (
            <div
              key={index}
              className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
              onClick={() => selectLocation(result)}
            >
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{result.display_name}</p>
                  <p className="text-xs text-gray-500">
                    {result.lat}, {result.lon}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedLocation && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-start space-x-2">
            <MapPin className="w-4 h-4 text-green-600 mt-1" />
            <div>
              <p className="text-sm font-medium text-green-900">Selected Location:</p>
              <p className="text-sm text-green-700">{selectedLocation.address}</p>
              <p className="text-xs text-green-600">
                Coordinates: {selectedLocation.lat.toFixed(6)}, {selectedLocation.lng.toFixed(6)}
              </p>
            </div>
          </div>
        </div>
      )}

      {selectedLocation && (
        <div className="mt-4">
          <Button 
            type="button" 
            onClick={() => setShowMap(!showMap)} 
            variant="outline"
            className="w-full"
          >
            {showMap ? 'Hide Map' : 'Show Map'}
          </Button>
          
          {showMap && (
            <div className="mt-4 border rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="300"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${selectedLocation.lng - 0.01},${selectedLocation.lat - 0.01},${selectedLocation.lng + 0.01},${selectedLocation.lat + 0.01}&layer=mapnik&marker=${selectedLocation.lat},${selectedLocation.lng}`}
                style={{ border: 0 }}
                title="Location Map"
              ></iframe>
              <div className="p-2 bg-gray-50 text-xs text-gray-600">
                <a 
                  href={`https://www.openstreetmap.org/?mlat=${selectedLocation.lat}&mlon=${selectedLocation.lng}#map=15/${selectedLocation.lat}/${selectedLocation.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Larger Map on OpenStreetMap
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationPicker;
