import { parseISO, format } from 'date-fns'

export default function DateComponent({ dateString }) {
   const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>
      {format(date, 'LLL d, yyyy')}
    </time>
  )
}
