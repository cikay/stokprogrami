import { Button, Card } from 'react-bootstrap'
import { IconType } from 'react-icons'
type CustomizedCardProps = React.PropsWithChildren<{
  className?: string
  style?: React.CSSProperties | undefined
  name: string
  count: number
  Icon: IconType
  onClick: () => void
}>
export default function CustomizedCard({
  className,
  style,
  name,
  count,
  Icon,
  onClick,
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
        <Icon
          style={{ height: '40%', width: '40%', cursor: 'pointer' }}
          onClick={onClick}
        />

        <div className='float-right align-middle'>
          <p className='text-center'>{count} </p>
          <p className='text-center'>{name}</p>
        </div>
      </Card.Body>
      <div style={{ backgroundColor: '149077' }}>
        <a
          style={{
            // color: '#2F4254',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
          className='align-items-center text-white'
          onClick={onClick}
        >
          Göster
        </a>
      </div>
    </Card>
  )
}
