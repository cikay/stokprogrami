import React from 'react'
import ReactDom from 'react-dom'
import { Modal } from 'react-bootstrap'
type Props = React.PropsWithChildren<{
  title: string
  show: boolean
  onHide: () => void
}>
export default function CustomizedModal({
  title,
  children,
  show,
  onHide,
}: Props) {
  return ReactDom.createPortal(
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>,
    document.body
  )
}
