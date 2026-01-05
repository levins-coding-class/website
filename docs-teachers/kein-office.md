---
sidebar_position: 5
---

# Warum KEINE Microsoft Office Produkte?

Diese Empfehlung mag kontrovers erscheinen, aber sie ist gut begründet:

## 1. Proprietäre Software

Microsoft Office ist:
- Kostenpflichtig (in der Vollversion)
- Nicht frei verfügbar
- An ein Unternehmen gebunden
- Nicht transparent (Closed Source)

**Alternative Philosophie:**
- Open Source bevorzugen
- Plattformunabhängige Lösungen
- Transparenz und Kontrolle
- Community-getrieben

## 2. Veraltetes Paradigma

Word, Excel, PowerPoint basieren auf einem **veralteten Arbeitsmodell**:
- WYSIWYG (What You See Is What You Get)
- Manuelle Formatierung
- Binäre Dateiformate
- Keine Versionskontrolle

**Moderne Arbeitsweise:**
- Inhalt und Darstellung trennen
- Automatisierung
- Textbasierte Formate
- Git-Integration

## 3. Vendor Lock-in vermeiden

Kinder an Microsoft zu gewöhnen bedeutet:
- Abhängigkeit von einem Anbieter
- Kostenpflichtige Software wird "normal"
- Schwieriger Wechsel zu Alternativen später
- Eingeschränkte Kreativität

## 4. Zukunftsorientierung

Die Arbeitswelt bewegt sich weg von Office:
- Entwickler nutzen Markdown, nicht Word
- Daten werden in JSON/YAML gespeichert, nicht Excel
- Präsentationen werden mit Code erstellt (reveal.js, etc.)
- Kollaboration passiert über Git, nicht per Email mit Anhängen

## 5. Kollaboration und Versionskontrolle - Der entscheidende Punkt

**Das ist der wichtigste Grund gegen Word:** Kollaboration im Internet ist essentiell für moderne Arbeit, und **Word macht hier den schlechtesten Job aller Zeiten**.

### Das fundamentale Problem: Keine strukturierte Datenbasis

**Word (.docx):**
- Binäres Format (ZIP-Archiv mit XML)
- Nicht menschenlesbar
- Keine Zeile-für-Zeile Änderungsverfolgung möglich
- Git kann nur sagen: "Datei wurde geändert" - aber nicht WAS genau

**Typst (.typ):**
- Reiner Text
- Jede Zeile ist lesbar
- Git kann exakt sagen: "Zeile 42 wurde von X nach Y geändert"
- Strukturierte Versionskontrolle möglich
