export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profile: {
        Row: {
          created_at: string | null
          id: string
          interval: string | null
          is_subscribed: boolean | null
          stripe_customer: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          interval?: string | null
          is_subscribed?: boolean | null
          stripe_customer?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          interval?: string | null
          is_subscribed?: boolean | null
          stripe_customer?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profile_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
