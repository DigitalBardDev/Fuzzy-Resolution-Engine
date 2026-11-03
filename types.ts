/**
 * Generic type definitions for webhook ingestion and resolution payloads.
 * Architecture demonstration purposes only.
 */

export interface WebhookPayload {
    record: Record<string, unknown>;
    old_record: Record<string, unknown> | null;
    type: 'INSERT' | 'UPDATE' | 'DELETE';
    schema: string;
    table: string;
}

export interface ResolutionResponse {
    success: boolean;
    resolved_entity_id?: string;
    confidence_score: number;
    timestamp: string;
    error_message?: string;
}
