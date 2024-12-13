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
      ai_company_insights: {
        Row: {
          analysis_data: Json | null
          company_id: string | null
          created_at: string | null
          id: string
          last_analysis: string | null
          updated_at: string | null
        }
        Insert: {
          analysis_data?: Json | null
          company_id?: string | null
          created_at?: string | null
          id?: string
          last_analysis?: string | null
          updated_at?: string | null
        }
        Update: {
          analysis_data?: Json | null
          company_id?: string | null
          created_at?: string | null
          id?: string
          last_analysis?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_company_insights_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_conversations: {
        Row: {
          created_at: string
          id: string
          prompt: string
          response: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          prompt: string
          response: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          prompt?: string
          response?: string
          user_id?: string
        }
        Relationships: []
      }
      ai_project_insights: {
        Row: {
          analysis_data: Json | null
          created_at: string | null
          id: string
          last_analysis: string | null
          project_id: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          analysis_data?: Json | null
          created_at?: string | null
          id?: string
          last_analysis?: string | null
          project_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          analysis_data?: Json | null
          created_at?: string | null
          id?: string
          last_analysis?: string | null
          project_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_project_insights_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_reminders: {
        Row: {
          content: string
          created_at: string | null
          due_date: string | null
          id: string
          is_completed: boolean | null
          priority: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          due_date?: string | null
          id?: string
          is_completed?: boolean | null
          priority?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          due_date?: string | null
          id?: string
          is_completed?: boolean | null
          priority?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      api_keys: {
        Row: {
          created_at: string | null
          id: string
          is_active: boolean | null
          key: string
          last_used: string | null
          service: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          key: string
          last_used?: string | null
          service: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          key?: string
          last_used?: string | null
          service?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      chat_comments: {
        Row: {
          content: string
          created_at: string
          id: string
          message_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          message_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          message_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_comments_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "chat_messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_messages: {
        Row: {
          content: string
          created_at: string
          id: string
          image: string | null
          updated_at: string
          user_id: string
          video: string | null
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          image?: string | null
          updated_at?: string
          user_id: string
          video?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          image?: string | null
          updated_at?: string
          user_id?: string
          video?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_reactions: {
        Row: {
          created_at: string
          emoji: string
          id: string
          message_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          emoji: string
          id?: string
          message_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          emoji?: string
          id?: string
          message_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_reactions_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "chat_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      client_actions: {
        Row: {
          action_date: string | null
          action_type: string
          client_id: string | null
          comment: string | null
          created_at: string | null
          created_by: string | null
          id: string
        }
        Insert: {
          action_date?: string | null
          action_type: string
          client_id?: string | null
          comment?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
        }
        Update: {
          action_date?: string | null
          action_type?: string
          client_id?: string | null
          comment?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_actions_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      client_favorites: {
        Row: {
          client_id: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          client_id: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          client_id?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_favorites_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      client_insights: {
        Row: {
          best_contact_time: string | null
          client_id: string | null
          created_at: string | null
          id: string
          last_analysis: string | null
          next_steps: string[] | null
          purchase_probability: number | null
          suggested_actions: Json | null
          updated_at: string | null
        }
        Insert: {
          best_contact_time?: string | null
          client_id?: string | null
          created_at?: string | null
          id?: string
          last_analysis?: string | null
          next_steps?: string[] | null
          purchase_probability?: number | null
          suggested_actions?: Json | null
          updated_at?: string | null
        }
        Update: {
          best_contact_time?: string | null
          client_id?: string | null
          created_at?: string | null
          id?: string
          last_analysis?: string | null
          next_steps?: string[] | null
          purchase_probability?: number | null
          suggested_actions?: Json | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_insights_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          assigned_to: string | null
          budget: string | null
          campaign: string | null
          city: string | null
          comments: string[] | null
          contact_method: string
          country: string
          created_at: string
          email: string | null
          facebook: string | null
          id: string
          name: string
          next_action_date: string | null
          next_action_type: string | null
          phone: string
          project: string | null
          rating: number | null
          sales_person: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          assigned_to?: string | null
          budget?: string | null
          campaign?: string | null
          city?: string | null
          comments?: string[] | null
          contact_method: string
          country: string
          created_at?: string
          email?: string | null
          facebook?: string | null
          id?: string
          name: string
          next_action_date?: string | null
          next_action_type?: string | null
          phone: string
          project?: string | null
          rating?: number | null
          sales_person?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          assigned_to?: string | null
          budget?: string | null
          campaign?: string | null
          city?: string | null
          comments?: string[] | null
          contact_method?: string
          country?: string
          created_at?: string
          email?: string | null
          facebook?: string | null
          id?: string
          name?: string
          next_action_date?: string | null
          next_action_type?: string | null
          phone?: string
          project?: string | null
          rating?: number | null
          sales_person?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      companies: {
        Row: {
          created_at: string
          description: string | null
          id: string
          logo: string | null
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          logo?: string | null
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          logo?: string | null
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      messenger_stats: {
        Row: {
          created_at: string | null
          id: string
          received_count: number | null
          sent_count: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          received_count?: number | null
          sent_count?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          received_count?: number | null
          sent_count?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          is_read: boolean | null
          message: string
          title: string
          type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          title: string
          type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          title?: string
          type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar: string | null
          company_id: string | null
          created_at: string
          full_name: string | null
          id: string
          is_enabled: boolean | null
          notification_settings: Json | null
          role: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          avatar?: string | null
          company_id?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          is_enabled?: boolean | null
          notification_settings?: Json | null
          role?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          avatar?: string | null
          company_id?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          is_enabled?: boolean | null
          notification_settings?: Json | null
          role?: string | null
          status?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          actual_budget: number | null
          attachments: Json[] | null
          available_units: string | null
          completion_percentage: number | null
          created_at: string
          custom_fields: Json | null
          dependencies: string[] | null
          description: string | null
          developer_id: string | null
          end_date: string | null
          estimated_budget: number | null
          floors_count: string | null
          id: string
          images: string[] | null
          location: string | null
          milestones: Json[] | null
          name: string
          operating_company: string | null
          price: string | null
          priority: string | null
          progress: number | null
          project_area: string | null
          project_division: string | null
          project_manager: string | null
          project_type: string | null
          risks: string[] | null
          start_date: string | null
          status: string | null
          team_members: string[] | null
          updated_at: string
          user_id: string
          video: string | null
        }
        Insert: {
          actual_budget?: number | null
          attachments?: Json[] | null
          available_units?: string | null
          completion_percentage?: number | null
          created_at?: string
          custom_fields?: Json | null
          dependencies?: string[] | null
          description?: string | null
          developer_id?: string | null
          end_date?: string | null
          estimated_budget?: number | null
          floors_count?: string | null
          id?: string
          images?: string[] | null
          location?: string | null
          milestones?: Json[] | null
          name: string
          operating_company?: string | null
          price?: string | null
          priority?: string | null
          progress?: number | null
          project_area?: string | null
          project_division?: string | null
          project_manager?: string | null
          project_type?: string | null
          risks?: string[] | null
          start_date?: string | null
          status?: string | null
          team_members?: string[] | null
          updated_at?: string
          user_id: string
          video?: string | null
        }
        Update: {
          actual_budget?: number | null
          attachments?: Json[] | null
          available_units?: string | null
          completion_percentage?: number | null
          created_at?: string
          custom_fields?: Json | null
          dependencies?: string[] | null
          description?: string | null
          developer_id?: string | null
          end_date?: string | null
          estimated_budget?: number | null
          floors_count?: string | null
          id?: string
          images?: string[] | null
          location?: string | null
          milestones?: Json[] | null
          name?: string
          operating_company?: string | null
          price?: string | null
          priority?: string | null
          progress?: number | null
          project_area?: string | null
          project_division?: string | null
          project_manager?: string | null
          project_type?: string | null
          risks?: string[] | null
          start_date?: string | null
          status?: string | null
          team_members?: string[] | null
          updated_at?: string
          user_id?: string
          video?: string | null
        }
        Relationships: []
      }
      properties: {
        Row: {
          area: string | null
          created_at: string
          description: string | null
          id: string
          images: string[] | null
          location: string | null
          operating_company: string | null
          owner_phone: string | null
          price: string | null
          project_sections: string | null
          title: string
          type: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          area?: string | null
          created_at?: string
          description?: string | null
          id?: string
          images?: string[] | null
          location?: string | null
          operating_company?: string | null
          owner_phone?: string | null
          price?: string | null
          project_sections?: string | null
          title: string
          type?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          area?: string | null
          created_at?: string
          description?: string | null
          id?: string
          images?: string[] | null
          location?: string | null
          operating_company?: string | null
          owner_phone?: string | null
          price?: string | null
          project_sections?: string | null
          title?: string
          type?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          company_id: string | null
          created_at: string
          end_date: string
          id: string
          is_active: boolean | null
          max_users: number
          start_date: string
          updated_at: string
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          end_date: string
          id?: string
          is_active?: boolean | null
          max_users?: number
          start_date?: string
          updated_at?: string
        }
        Update: {
          company_id?: string | null
          created_at?: string
          end_date?: string
          id?: string
          is_active?: boolean | null
          max_users?: number
          start_date?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          assigned_to: string | null
          created_at: string
          created_by: string
          description: string | null
          due_date: string | null
          id: string
          priority: string
          reminder_date: string | null
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string
          created_by: string
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: string
          reminder_date?: string | null
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          created_at?: string
          created_by?: string
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: string
          reminder_date?: string | null
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_permissions: {
        Row: {
          created_at: string
          id: string
          permission_key: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          permission_key: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          permission_key?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_permissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      whatsapp_stats: {
        Row: {
          created_at: string | null
          id: string
          received_count: number | null
          sent_count: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          received_count?: number | null
          sent_count?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          received_count?: number | null
          sent_count?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_project_cascade: {
        Args: {
          project_id_param: string
        }
        Returns: Json
      }
      get_active_sessions: {
        Args: Record<PropertyKey, never>
        Returns: {
          user_id: string
          active_sessions: number
        }[]
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
