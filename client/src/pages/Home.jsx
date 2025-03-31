import React from 'react';
import { useCheckIn } from '../context/CheckInContext';
import { Container, Card, Button, Badge, Row, Col } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  const { entries, registerEntry, registerExit, hasOpenEntry } = useCheckIn();

  const latestEntry = entries.length > 0 ? entries[entries.length - 1] : null;

  const handleCheckInOut = () => {
    if (hasOpenEntry) {
      registerExit();
    } else {
      registerEntry();
    }
  };

  const formatTime = (iso) => {
    const date = new Date(iso);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('es-ES', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  return (
    <Container className="mt-4">
      <Row className="align-items-center">
        <Col>
          <h2 className="mb-1">¡Hola, Moha Khamkham!</h2>
          <p className="text-muted">Resumen de actividad esta semana</p>
        </Col>
        <Col xs="auto" className="text-end text-muted">
          <small>{formatDate(new Date())}</small>
        </Col>
      </Row>

      <div className="text-center">
        <Button
          onClick={handleCheckInOut}
          className={hasOpenEntry ? 'btn-exit' : 'btn-entry'}
        >
          {hasOpenEntry ? 'Registrar Salida' : 'Registrar Entrada'}
        </Button>

        {latestEntry && (
          <div className="registro-info">
            <p className="mt-3">
              {latestEntry.type === 'entry' ? 'Entrada' : 'Salida'} registrada a las{' '}
              <Badge bg="secondary">{formatTime(latestEntry.time)}</Badge>
            </p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Home;
