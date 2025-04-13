import React from 'react';
import './App.css';
import { FiEdit2, FiTrash } from 'react-icons/fi';

const data = [
  {
    date: '10/03/2025',
    agent: 'Mohammed BENABDALLAH',
    site: 'Stade de Paris',
    start: '08:00',
    arrival: '08:30',
    delay: '30 min',
    reason: 'Problème de transport',
    status: 'En attente',
  },
];

const Badge = ({ type, children }) => {
  return (
    <span className={`badge ${type}`}>
      {children}
    </span>
  );
};

export default function App() {
  return (
    <div className="page-container">
      <div className="header">
        <h1>Gestion des Retards</h1>
        <div className="filters">
          <select>
            <option>Tous les sites</option>
          </select>
          <select>
            <option>Tous les agents</option>
          </select>
          <input type="date" />
          <button className="add-button">+ Ajouter</button>
        </div>
      </div>

      <div className="table-container">
        <p>{data.length} enregistrement{data.length > 1 ? 's' : ''}</p>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Agent</th>
              <th>Site</th>
              <th>Heure début</th>
              <th>Heure arrivée</th>
              <th>Retard</th>
              <th>Motif</th>
              <th>Statut</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.agent}</td>
                <td>{item.site}</td>
                <td>{item.start}</td>
                <td>{item.arrival}</td>
                <td><Badge type="red">{item.delay}</Badge></td>
                <td>{item.reason}</td>
                <td><Badge type="yellow">{item.status}</Badge></td>
                <td className="actions">
                  <button><FiEdit2 /></button>
                  <button><FiTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
