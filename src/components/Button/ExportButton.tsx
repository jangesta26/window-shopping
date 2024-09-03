import React from 'react'
import { Button } from '../ui/button'
import { File } from 'lucide-react'

const ExportButton = () => {
  return (
    <Button
    size="sm"
    variant="outline"
    className="h-7 gap-1 text-sm"
  >
    <File className="h-3.5 w-3.5" />
    <span className="sr-only sm:not-sr-only">Export</span>
  </Button>
  )
}

export default ExportButton
