<<<<<<< HEAD
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
=======
import React from 'react';
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

export default function Home() {
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
>>>>>>> refs/remotes/origin/main
    </div>
  );
}
