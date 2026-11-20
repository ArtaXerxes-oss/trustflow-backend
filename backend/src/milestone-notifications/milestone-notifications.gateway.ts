import { Server, Socket } from 'socket.io';
import { Redis } from 'ioredis';
import { REDIS_CLIENT } from '../common/redis/redis.module';
import { OUTBOX_GATEWAY_CHANNEL } from '../outbox/outbox-publisher.service';
import { OutboxEvent } from '../outbox/outbox.types';
import { EventDedupService } from './event-dedup.service';
import { config } from '../config/env.config';

/** Gig ids are `gig-<ts>-<rand>` today; accept any short id of safe characters (#393). */
const GIG_ID_PATTERN = /^[A-Za-z0-9_-]{1,64}$/;
const ROOM_PREFIX = 'gig:';

export interface SubscriptionAck {
  event: 'subscribed' | 'unsubscribed' | 'error';
  data: { gigId?: string; error?: string; backfilled?: number; resumeToken?: string };
}
