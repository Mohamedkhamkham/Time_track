// src/pages/CheckIn.jsx

import React, { useState } from 'react';
import { useCheckIn } from '../context/CheckInContext';
import FilterTabs from '../components/CheckIn/FilterTabs';
import { Container, Card, Row, Col, Badge } from 'react-bootstrap';
import './CheckIn.css';

const CheckIn = () => {
  const [selectedTab, setSelectedTab] = useState('day');
  const { entries } = useCheckIn();

  const filteredEntries = entries.filter(entry => {
    const entryDate = new Date(entry.time);
    const now = new Date();

    if (selectedTab === 'day') {
      return (
        entryDate.getFullYear() === now.getFullYear() &&
        entryDate.getMonth() === now.getMonth() &&
        entryDate.getDate() === now.getDate()
      );
    }

    if (selectedTab === 'week') {
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - now.getDay());
      startOfWeek.setHours(0, 0, 0, 0);

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      endOfWeek.setHours(23, 59, 59, 999);

      return entryDate >= startOfWeek && entryDate <= endOfWeek;
    }

    if (selectedTab === 'month') {
      return (
        entryDate.getFullYear() === now.getFullYear() &&
        entryDate.getMonth() === now.getMonth()
      );
    }

    return true;
  });

  const formatTime = (iso) => {
    const date = new Date(iso);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatFullDate = (date) => {
    return date.toLocaleDateString('es-ES', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  return (
    <Container className="check-in-page mt-4">
      <h2 className="mb-1">Fichajes</h2>
      <p className="text-muted">{formatFullDate(new Date())}</p>

      <FilterTabs selectedTab={selectedTab} onChange={setSelectedTab} />

      {filteredEntries.length === 0 ? (
        <p className="mt-4">No hay fichajes aún.</p>
      ) : (
        <Row className="mt-3">
          {filteredEntries.map((item, index) => (
            <Col key={index} md={6} lg={4} className="mb-3">
              <Card border={item.type === 'entry' ? 'success' : 'danger'}>
                <Card.Body>
                  <Card.Title className="text-capitalize d-flex justify-content-between align-items-center">
                    <span>{item.type === 'entry' ? 'Entrada' : 'Salida'}</span>
                    <Badge bg={item.type === 'entry' ? 'success' : 'danger'}>
                      {formatTime(item.time)}
                    </Badge>
                  </Card.Title>
                  {item.note && <Card.Text><strong>Nota:</strong> {item.note}</Card.Text>}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default CheckIn;
