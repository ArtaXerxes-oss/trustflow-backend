import { Module, Global } from '@nestjs/common';
import { HealthService } from './health.service';
import { MetricsService } from './metrics.service';
import { HealthController } from './health.controller';
import { MetricsHttpInterceptor } from './metrics-http.interceptor';
import { RequestTimeoutInterceptor } from '../common/http/request-timeout.interceptor';
import { DatabaseModule } from '../common/database/database.module';
import { TracingService } from './tracing.service';

@Global()
@Module({
  imports: [DatabaseModule],
  controllers: [HealthController],
  providers: [
    HealthService,
    MetricsService,
    MetricsHttpInterceptor,
    RequestTimeoutInterceptor,
    TracingService,
  ],
  exports: [
    HealthService,
    MetricsService,
    MetricsHttpInterceptor,
    RequestTimeoutInterceptor,
    TracingService,
  ],
})
export class MonitoringModule {}
