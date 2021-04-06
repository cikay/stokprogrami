import { Button, Card } from 'react-bootstrap'
type CustomizedCardProps = React.PropsWithChildren<{
  className?: string
  style?: React.CSSProperties | undefined
  name: string
  count: number
}>
export default function CustomizedCard({
  className,
  children,
  style,
  name,
  count,
}: CustomizedCardProps) {
  const totalStyle = {
    height: '10rem',
    width: '12rem',
    display: 'inline-block',
    ...style,
  }
  return (
    <Card className={className} style={totalStyle}>
      <Card.Body>
        {children}
        <div className='float-right align-middle'>
          <p className='text-center'>{count} </p>
          <p className='text-center'>{name}</p>
        </div>
      </Card.Body>
      <Button
        style={{ backgroundColor: '#2F4254' }}
        className='align-items-center'
      >
        Göster
      </Button>
    </Card>
  )
}
