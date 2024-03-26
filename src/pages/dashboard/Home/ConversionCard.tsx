import { Badge } from '@/components/Badge'
import { Card } from '@/components/Card'
import { Icon, IconProps } from '@/components/Icon'
import { ProgressBar } from '@/components/ProgressBar'
import { cn } from '@/utils/cn'
import { formatPercentage } from '@/utils/formatters'

type ConversionCardProps = {
  icon: IconProps['name']
  title: string
  badge: number
  percent: number
  color?: string
}

export function ConversionCard({ icon, title, badge, percent, color }: ConversionCardProps) {
  return (
    <Card className="flex flex-col items-start gap-4 p-4">
      <strong className="flex items-center gap-2 font-bold tracking-[0.5px] text-neutral-950">
        <Icon name={icon} />
        {title}
      </strong>

      <Badge className="h-6 rounded-lg px-2 text-sm">{badge}</Badge>

      <div className="flex w-full flex-col gap-1">
        <ProgressBar value={percent} className={color} />

        <span
          className={cn('font-bold tracking-[0.5px] cursor-default', color ?? 'text-secondary')}
          title={percent.toString()}
        >
          {formatPercentage(percent)}
        </span>
      </div>
    </Card>
  )
}
