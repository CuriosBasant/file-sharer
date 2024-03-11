export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      participant: {
        Row: {
          created_at: string
          id: string
          quiz_id: number
          score: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id: string
          quiz_id: number
          score?: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          quiz_id?: number
          score?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'participant_quiz_id_fkey'
            columns: ['quiz_id']
            referencedRelation: 'quiz'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'participant_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'profile'
            referencedColumns: ['id']
          },
        ]
      }
      post: {
        Row: {
          created_at: string
          description: string | null
          id: number
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'post_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'profile'
            referencedColumns: ['id']
          },
        ]
      }
      profile: {
        Row: {
          first_name: string | null
          id: string
          last_name: string | null
          username: string | null
        }
        Insert: {
          first_name?: string | null
          id: string
          last_name?: string | null
          username?: string | null
        }
        Update: {
          first_name?: string | null
          id?: string
          last_name?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'profile_id_fkey'
            columns: ['id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      question: {
        Row: {
          difficulty: Database['public']['Enums']['quiz_question_difficulty']
          id: number
          options: Json
          type: Database['public']['Enums']['quiz_question_type']
        }
        Insert: {
          difficulty?: Database['public']['Enums']['quiz_question_difficulty']
          id?: number
          options?: Json
          type?: Database['public']['Enums']['quiz_question_type']
        }
        Update: {
          difficulty?: Database['public']['Enums']['quiz_question_difficulty']
          id?: number
          options?: Json
          type?: Database['public']['Enums']['quiz_question_type']
        }
        Relationships: [
          {
            foreignKeyName: 'question_id_fkey'
            columns: ['id']
            referencedRelation: 'post'
            referencedColumns: ['id']
          },
        ]
      }
      question_attempt: {
        Row: {
          created_at: string
          id: number
          options: Json
          question_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          options?: Json
          question_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          options?: Json
          question_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'question_attempt_question_id_fkey'
            columns: ['question_id']
            referencedRelation: 'question'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'question_attempt_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'participant'
            referencedColumns: ['id']
          },
        ]
      }
      quiz: {
        Row: {
          id: number
        }
        Insert: {
          id?: number
        }
        Update: {
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'quiz_id_fkey'
            columns: ['id']
            referencedRelation: 'post'
            referencedColumns: ['id']
          },
        ]
      }
      quiz_question: {
        Row: {
          created_at: string | null
          id: number
          question_id: number
          quiz_id: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          question_id: number
          quiz_id: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          question_id?: number
          quiz_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'quiz_question_question_id_fkey'
            columns: ['question_id']
            referencedRelation: 'question'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'quiz_question_quiz_id_fkey'
            columns: ['quiz_id']
            referencedRelation: 'quiz'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'quiz_question_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'profile'
            referencedColumns: ['id']
          },
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
      quiz_question_difficulty: 'easy' | 'medium' | 'hard'
      quiz_question_type: 'single' | 'multiple' | 'sort' | 'match' | 'fill_blank' | 'free'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
