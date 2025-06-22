
import { useState, useEffect, useRef } from 'react';

const AnimatedMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    cases: 0,
    seized: 0,
    programs: 0,
    successRate: 0,
    operations: 0,
    districts: 0,
    livesImpacted: 0,
    collegePrograms: 0,
    schoolVisits: 0,
    communityEvents: 0,
    participants: 0,
    mediaReach: 0,
    socialMediaImpact: 0
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = {
        cases: 1450,
        seized: 94.38,
        programs: 500,
        successRate: 98,
        operations: 24,
        districts: 50,
        livesImpacted: 100000,
        collegePrograms: 250,
        schoolVisits: 400,
        communityEvents: 180,
        participants: 75000,
        mediaReach: 2000000,
        socialMediaImpact: 500000
      };

      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCounts({
          cases: Math.floor(targets.cases * easeOutQuart),
          seized: Math.floor(targets.seized * easeOutQuart * 100) / 100,
          programs: Math.floor(targets.programs * easeOutQuart),
          successRate: Math.floor(targets.successRate * easeOutQuart),
          operations: Math.floor(targets.operations * easeOutQuart),
          districts: Math.floor(targets.districts * easeOutQuart),
          livesImpacted: Math.floor(targets.livesImpacted * easeOutQuart),
          collegePrograms: Math.floor(targets.collegePrograms * easeOutQuart),
          schoolVisits: Math.floor(targets.schoolVisits * easeOutQuart),
          communityEvents: Math.floor(targets.communityEvents * easeOutQuart),
          participants: Math.floor(targets.participants * easeOutQuart),
          mediaReach: Math.floor(targets.mediaReach * easeOutQuart),
          socialMediaImpact: Math.floor(targets.socialMediaImpact * easeOutQuart)
        });

        if (step >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        {/* Impact So Far Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Impact So Far</h2>
          <p className="text-xl text-blue-100">Our commitment to a drug-free Telangana</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">🚔</div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">{counts.cases.toLocaleString()}+</div>
            <div className="text-sm font-semibold">Drug Cases Solved</div>
            <div className="text-xs text-blue-200 mt-1">Successfully investigated and resolved</div>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">💰</div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">₹{counts.seized} Cr</div>
            <div className="text-sm font-semibold">Seized in 2023</div>
            <div className="text-xs text-blue-200 mt-1">Total value of drugs and assets seized</div>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">🧑‍🎓</div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">{counts.programs}+</div>
            <div className="text-sm font-semibold">Awareness Programs</div>
            <div className="text-xs text-blue-200 mt-1">Educational sessions conducted</div>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">⭐</div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">{counts.successRate}%</div>
            <div className="text-sm font-semibold">Success Rate</div>
            <div className="text-xs text-blue-200 mt-1">Case resolution efficiency</div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{counts.operations}/7</div>
            <div className="text-sm">Operations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{counts.districts}+</div>
            <div className="text-sm">Districts</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{formatNumber(counts.livesImpacted)}+</div>
            <div className="text-sm">Lives Impacted</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">✨</div>
            <div className="text-sm">Impact Created</div>
          </div>
        </div>

        {/* Awareness Campaign Gallery */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Awareness Campaign Gallery</h3>
          <p className="text-xl text-blue-100">Spreading awareness across Telangana</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🎓</div>
            <div className="text-2xl font-bold text-yellow-400 mb-2">{counts.collegePrograms}+</div>
            <div className="font-semibold mb-2">College Programs</div>
            <div className="text-sm text-blue-200 mb-3">Interactive sessions in educational institutions</div>
            <div className="text-yellow-400 text-sm">✨ Impact Created</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🏫</div>
            <div className="text-2xl font-bold text-yellow-400 mb-2">{counts.schoolVisits}+</div>
            <div className="font-semibold mb-2">School Visits</div>
            <div className="text-sm text-blue-200 mb-3">Awareness drives in schools across the state</div>
            <div className="text-yellow-400 text-sm">✨ Impact Created</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">👥</div>
            <div className="text-2xl font-bold text-yellow-400 mb-2">{counts.communityEvents}+</div>
            <div className="font-semibold mb-2">Community Events</div>
            <div className="text-sm text-blue-200 mb-3">Public awareness campaigns and rallies</div>
            <div className="text-yellow-400 text-sm">✨ Impact Created</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🙋‍♂️</div>
            <div className="text-2xl font-bold text-yellow-400 mb-2">{formatNumber(counts.participants)}+</div>
            <div className="font-semibold mb-2">Participants Reached</div>
            <div className="text-sm text-blue-200 mb-3">Citizens directly impacted by our programs</div>
            <div className="text-yellow-400 text-sm">✨ Impact Created</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">📺</div>
            <div className="text-2xl font-bold text-yellow-400 mb-2">{formatNumber(counts.mediaReach)}+</div>
            <div className="font-semibold mb-2">Media Reach</div>
            <div className="text-sm text-blue-200 mb-3">People reached through media campaigns</div>
            <div className="text-yellow-400 text-sm">✨ Impact Created</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">💫</div>
            <div className="text-2xl font-bold text-yellow-400 mb-2">{formatNumber(counts.socialMediaImpact)}+</div>
            <div className="font-semibold mb-2">Social Media Impact</div>
            <div className="text-sm text-blue-200 mb-3">Online engagement and awareness created</div>
            <div className="text-yellow-400 text-sm">✨ Impact Created</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedMetrics;
