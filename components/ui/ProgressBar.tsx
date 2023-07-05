interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div class='h-1 rounded-xl bg-[#7F7F7F] max-w-full'>
      <div 
        role="progressbar"
        aria-label="Progresso de reviews para o produto específico"
        aria-valuenow={progress}
        class="h-1 rounded-xl bg-[#005EB8] transition-all duration-150 ease-linear"
        style={{
          width: `${progress}%`
        }}
      />
    </div>
  )
}