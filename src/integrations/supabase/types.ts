export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      achievements: {
        Row: {
          category: string | null
          created_at: string
          date: string
          description: string
          id: string
          image_url: string | null
          title: string
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          date: string
          description: string
          id?: string
          image_url?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          date?: string
          description?: string
          id?: string
          image_url?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      admin_users: {
        Row: {
          created_at: string
          email: string
          failed_login_attempts: number | null
          id: string
          last_login: string | null
          password_hash: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          failed_login_attempts?: number | null
          id?: string
          last_login?: string | null
          password_hash: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          failed_login_attempts?: number | null
          id?: string
          last_login?: string | null
          password_hash?: string
          updated_at?: string
        }
        Relationships: []
      }
      announcements: {
        Row: {
          attachment_link: string | null
          created_at: string
          date: string
          description: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          attachment_link?: string | null
          created_at?: string
          date: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          attachment_link?: string | null
          created_at?: string
          date?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      anti_drug_soldiers: {
        Row: {
          address: string
          certificate_id: string
          class_course_designation: string | null
          created_at: string
          district: string
          email: string
          enrollment_date: string
          gender: string
          id: string
          institution_name: string
          institution_type: string
          mobile_number: string
          name: string
          parent_guardian_name: string
          photo_url: string | null
          remarks: string | null
        }
        Insert: {
          address: string
          certificate_id: string
          class_course_designation?: string | null
          created_at?: string
          district: string
          email: string
          enrollment_date?: string
          gender: string
          id?: string
          institution_name: string
          institution_type: string
          mobile_number: string
          name: string
          parent_guardian_name: string
          photo_url?: string | null
          remarks?: string | null
        }
        Update: {
          address?: string
          certificate_id?: string
          class_course_designation?: string | null
          created_at?: string
          district?: string
          email?: string
          enrollment_date?: string
          gender?: string
          id?: string
          institution_name?: string
          institution_type?: string
          mobile_number?: string
          name?: string
          parent_guardian_name?: string
          photo_url?: string | null
          remarks?: string | null
        }
        Relationships: []
      }
      audit_log: {
        Row: {
          action: string
          created_at: string
          id: string
          ip_address: string | null
          new_values: Json | null
          old_values: Json | null
          record_id: string | null
          table_name: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          id?: string
          ip_address?: string | null
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string | null
          table_name?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          id?: string
          ip_address?: string | null
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string | null
          table_name?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      celebrity_videos: {
        Row: {
          created_at: string
          designation: string
          id: string
          name: string
          updated_at: string
          video_url: string
        }
        Insert: {
          created_at?: string
          designation: string
          id?: string
          name: string
          updated_at?: string
          video_url: string
        }
        Update: {
          created_at?: string
          designation?: string
          id?: string
          name?: string
          updated_at?: string
          video_url?: string
        }
        Relationships: []
      }
      certificate_verification: {
        Row: {
          certificate_id: string
          created_at: string
          id: string
          student_name: string
        }
        Insert: {
          certificate_id: string
          created_at?: string
          id?: string
          student_name: string
        }
        Update: {
          certificate_id?: string
          created_at?: string
          id?: string
          student_name?: string
        }
        Relationships: []
      }
      drug_reports: {
        Row: {
          created_at: string
          date_unknown: boolean | null
          detailed_description: string
          evidence_file_name: string | null
          evidence_file_size: number | null
          evidence_file_url: string | null
          id: string
          incident_date_time: string | null
          ip_address: string | null
          is_anonymous: boolean
          location_incident: string
          report_type: string
          reporter_email: string | null
          reporter_name: string | null
          reporter_phone: string | null
          reviewed_by: string | null
          reviewer_notes: string | null
          status: string | null
          updated_at: string
          user_agent: string | null
        }
        Insert: {
          created_at?: string
          date_unknown?: boolean | null
          detailed_description: string
          evidence_file_name?: string | null
          evidence_file_size?: number | null
          evidence_file_url?: string | null
          id?: string
          incident_date_time?: string | null
          ip_address?: string | null
          is_anonymous?: boolean
          location_incident: string
          report_type: string
          reporter_email?: string | null
          reporter_name?: string | null
          reporter_phone?: string | null
          reviewed_by?: string | null
          reviewer_notes?: string | null
          status?: string | null
          updated_at?: string
          user_agent?: string | null
        }
        Update: {
          created_at?: string
          date_unknown?: boolean | null
          detailed_description?: string
          evidence_file_name?: string | null
          evidence_file_size?: number | null
          evidence_file_url?: string | null
          id?: string
          incident_date_time?: string | null
          ip_address?: string | null
          is_anonymous?: boolean
          location_incident?: string
          report_type?: string
          reporter_email?: string | null
          reporter_name?: string | null
          reporter_phone?: string | null
          reviewed_by?: string | null
          reviewer_notes?: string | null
          status?: string | null
          updated_at?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      faqs: {
        Row: {
          answer: string
          category: string
          created_at: string
          id: string
          question: string
          updated_at: string
        }
        Insert: {
          answer: string
          category?: string
          created_at?: string
          id?: string
          question: string
          updated_at?: string
        }
        Update: {
          answer?: string
          category?: string
          created_at?: string
          id?: string
          question?: string
          updated_at?: string
        }
        Relationships: []
      }
      news_articles: {
        Row: {
          created_at: string
          date: string | null
          description: string
          id: string
          image_url: string
          link: string | null
          news_type: string
          subtitle: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          date?: string | null
          description: string
          id?: string
          image_url: string
          link?: string | null
          news_type: string
          subtitle?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          date?: string | null
          description?: string
          id?: string
          image_url?: string
          link?: string | null
          news_type?: string
          subtitle?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      rate_limit: {
        Row: {
          action: string
          attempts: number | null
          created_at: string
          id: string
          ip_address: string
          window_start: string
        }
        Insert: {
          action: string
          attempts?: number | null
          created_at?: string
          id?: string
          ip_address: string
          window_start?: string
        }
        Update: {
          action?: string
          attempts?: number | null
          created_at?: string
          id?: string
          ip_address?: string
          window_start?: string
        }
        Relationships: []
      }
      scrolling_content: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          language: string
          text: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          language: string
          text: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          language?: string
          text?: string
          updated_at?: string
        }
        Relationships: []
      }
      training_sessions: {
        Row: {
          capacity: number | null
          created_at: string
          date: string
          description: string
          id: string
          image_url: string | null
          instructor: string | null
          location: string | null
          registration_link: string | null
          time: string | null
          title: string
          updated_at: string
        }
        Insert: {
          capacity?: number | null
          created_at?: string
          date: string
          description: string
          id?: string
          image_url?: string | null
          instructor?: string | null
          location?: string | null
          registration_link?: string | null
          time?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          capacity?: number | null
          created_at?: string
          date?: string
          description?: string
          id?: string
          image_url?: string | null
          instructor?: string | null
          location?: string | null
          registration_link?: string | null
          time?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_rate_limit: {
        Args: {
          p_ip_address: string
          p_action: string
          p_max_attempts?: number
          p_window_minutes?: number
        }
        Returns: boolean
      }
      log_audit_event: {
        Args: {
          p_user_id: string
          p_action: string
          p_table_name?: string
          p_record_id?: string
          p_old_values?: Json
          p_new_values?: Json
          p_ip_address?: string
          p_user_agent?: string
        }
        Returns: undefined
      }
      verify_password: {
        Args: { password: string; hash: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
