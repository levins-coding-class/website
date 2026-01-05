---
sidebar_position: 3
---

# Informationen für Eltern

Willkommen beim Mentoring-Programm für Kinder! Diese Seite enthält alle wichtigen Informationen.

## Was ist das Mentoring-Programm?

Dieses Programm ist **kein klassischer Kurs** mit festen Lehrplänen, Laufzeiten oder Prüfungen. Es ist ein **offenes Mentoring-Angebot**: Dein Kind hat einen Ansprechpartner, wenn es beim Programmieren, Schreiben oder Entwickeln nicht mehr weiterkommt.

**Ich (Levin Keller) bin dabei nur ein Scharnier** - ich verbinde dein Kind mit dem Wissen und den Ressourcen, die es braucht, um seine eigenen Ideen umzusetzen. Was dein Kind macht, lernt und entwickelt, ist **komplett individuell** und richtet sich nach den Interessen deines Kindes.

### Für wen ist dieses Mentoring?

Das Mentoring richtet sich **vorrangig an Kinder, deren Eltern mich persönlich kennen**. Dazu gehören zum Beispiel:

- Klassenkamerad:innen meiner eigenen Kinder
- Kinder von Eltern aus meinem persönlichen Umfeld (z.B. aus dem Dorf, in dem ich wohne)
- Kinder von Freund:innen und Bekannten

Das Mentoring ist bewusst als **persönliches Angebot** konzipiert und basiert auf Vertrauen und direktem Kontakt. Dies ermöglicht eine individuelle Betreuung.

### Warum nicht Scratch, Blockly oder ähnliche visuelle Tools?

Viele Kinder-Programmierkurse nutzen visuelle Programmierumgebungen wie Scratch. Das ist ein guter erster Kontakt mit Programmierkonzepten, führt aber oft in die **"Scratch-Falle"**:

- Kinder verbringen Jahre mit visuellen Block-Systemen
- Der Übergang zu echtem Code (Text-basiert) ist dann ein riesiger, frustrierender Sprung
- Viele geben auf, weil sie wieder "von vorne" anfangen müssen
- Professionelle Entwicklung verwendet **keine** visuellen Block-Systeme

**Mein Ansatz:** Ich starte direkt mit den echten Tools, die professionelle Entwickler täglich nutzen. Die Lernkurve mag am Anfang etwas flacher[^1] sein, aber dein Kind lernt von Anfang an die richtigen Werkzeuge und Arbeitsweisen. Keine Zeit wird verschwendet, alles Gelernte ist direkt auf echte Softwareentwicklung übertragbar.

## Wie funktioniert das Mentoring?

### Betreuungsform
- **Asynchrone Kommunikation** über GitHub Issues und Discussions
- **Video-Calls** nach Bedarf, wenn komplexere Fragen auftauchen
- **Onboarding-Session** am Anfang zur Einrichtung der Technik
- **Gruppen-Sessions** (optional) zum Austausch mit anderen Kindern

### Betreuung
Dein Kind arbeitet selbstständig an seinen Projekten und meldet sich, wenn es Hilfe braucht. Ich schaue regelmäßig nach dem Rechten und gebe Feedback über GitHub.

## Hardware-Anforderungen

### Betriebssystem - Linux ist Pflicht!

Für diesen Kurs wird **zwingend ein Unix-basiertes Betriebssystem** benötigt:

- ✅ **Linux** (Ubuntu, Debian, Fedora, etc.) - **STARK EMPFOHLEN**
- ✅ **macOS** (alle aktuellen Versionen) - funktioniert gut
- ⚠️ **Windows** - **NUR als Notlösung** mit WSL 2

:::tip Warum Linux?
- Professionelle Entwickler arbeiten hauptsächlich mit Linux/macOS
- Alle wichtigen Server laufen mit Linux
- Bessere Terminal-Integration und Tool-Unterstützung
- Windows mit WSL funktioniert zwar, ist aber eine Kompromisslösung mit gelegentlichen Problemen
:::

:::warning Wenn ihr nur einen Windows-PC habt
- WSL 2 ist möglich, aber nicht ideal
- Besser: Einen günstigen Linux-Rechner besorgen (siehe unten)
- Oder: Alten Computer mit Linux neu aufsetzen
:::

### Empfohlene Hardware-Lösung

**[Raspberry Pi 500+](https://www.raspberrypi.com/products/raspberry-pi-500-plus/) (~200 EUR):**
- Komplett-System mit eingebautem 256GB NVMe-Speicher und 16GB RAM
- Kommt fertig mit Linux eingerichtet
- Vollständig ausreichend für alle Kursinhalte
- Kostengünstig und pädagogisch wertvoll
- Genau das gleiche System, das andere Kursteilnehmer verwenden

:::warning Nicht den normalen Pi 500 kaufen!
Der normale Raspberry Pi 500 (ohne "+") hat nur eine langsame SD-Karte. Der **Pi 500+** hat eingebauten NVMe-Speicher und ist deutlich schneller!
:::

### Eingabegeräte - WICHTIG!

**Zwingend erforderlich:**
- ✅ **Tastatur** (physisch, keine Bildschirmtastatur)
- ✅ **Maus** oder Trackpad

**NICHT geeignet:**
- ❌ **Tablets** (iPad, Android-Tablets) - **keine Kursteilnahme möglich**
- ❌ **Smartphones** - **keine Kursteilnahme möglich**
- ❌ **Chromebooks** (eingeschränkt, nicht empfohlen)

:::danger Warum keine Tablets?
Programmieren erfordert:
- Schnelles Tippen mit beiden Händen
- Präzise Maussteuerung
- Viele Tastenkombinationen (Shortcuts)
- Mehrere Fenster gleichzeitig im Blick
:::

### Mindestanforderungen

Falls ihr bereits einen Computer habt:
- Mindestens 4 GB RAM (besser 8 GB)
- Mindestens 20 GB freier Speicherplatz
- Stabile Internetverbindung
- **Physische Tastatur und Maus**

## Technische Voraussetzungen

### Fernzugriff
Für technischen Support und Hilfestellung benötige ich:
- **Fernzugriff** auf das Gerät deines Kindes
- **Eigenen Administrator-Account** auf dem Gerät
- Dies ermöglicht schnelle Problemlösung ohne persönlichen Besuch

### Installation
Falls noch nicht vorhanden, muss vor Kursbeginn installiert werden:
- **VS Code** (Entwicklungsumgebung)
- **Git** (Versionskontrolle)
- Bei Windows: **WSL 2** (Windows Subsystem for Linux)

Unterstützung bei der Installation bekommst du beim Onboarding.

## Mögliche Lerninhalte

Was dein Kind lernt, hängt von seinen Interessen ab. Hier sind einige Themenbereiche, die wir erkunden können:

### Grundlegende Werkzeuge
Fast alle Kinder lernen diese Basis-Tools kennen:
- **Git & GitHub** - Projekte speichern, teilen, Fragen stellen
- **VS Code** - Eine professionelle Entwicklungsumgebung
- **Terminal** - Die Kommandozeile nutzen

### Dokumente erstellen
- **Typst** - Dokumente mit Code erstellen (moderner Word-Ersatz)
- Oft ein guter Einstieg, weil Kinder schnell sichtbare Ergebnisse haben

### Web-Entwicklung
Für Kinder, die Websites bauen möchten:
- **Markdown** - Einfache Textformatierung
- **HTML & CSS** - Grundlagen des Webs
- **React** - Moderne, interaktive Websites
- **Astro** - Statische Websites und Blogs

### Datenformate
- **JSON & YAML** - Wie Computer Daten strukturieren

## Jedes Kind ist anders

Das Mentoring passt sich deinem Kind an:
- Es gibt **keine Laufzeit** - das Mentoring läuft so lange, wie es sinnvoll ist
- Es gibt **keine Phasen** - der Lernweg ergibt sich aus den Interessen
- Es gibt **keinen Druck** - dein Kind arbeitet, wann es Lust hat

## Pädagogischer Ansatz

### Hands-On Learning
- Kinder lernen durch **praktische Projekte**
- Sie erstellen echte Dokumente und später Websites
- Fehler sind Teil des Lernprozesses

### Selbstständigkeit fördern
- Kinder lernen, sich selbst zu helfen
- Nutzung von GitHub für Fragen und Diskussionen
- Entwicklung von Problemlösungsfähigkeiten

### Moderne Tools
- Verwendung professioneller Entwicklungswerkzeuge
- Vorbereitung auf die echte Entwicklungswelt
- Skills, die langfristig nützlich sind

## Flexibilität

Das Mentoring ist **komplett flexibel**:
- Dein Kind arbeitet, wann es Zeit und Lust hat
- Es gibt keine Mindest- oder Höchstdauer
- Pausen sind jederzeit möglich
- Das Mentoring endet, wenn es nicht mehr passt - ohne Verpflichtungen

## Kosten

Das Mentoring ist **komplett kostenlos**. Es fallen keine Gebühren an.

## Support & Kommunikation

### GitHub-Organisation

Alle Kursaktivitäten sind in der [GitHub-Organisation "levins-coding-class"](https://github.com/orgs/levins-coding-class) gebündelt. Diese Organisation dient als zentrale Anlaufstelle für:

- **Kurs-Repositories** - Hier liegen alle Projekte und Materialien
- **Internes Diskussionsforum** - Für den Austausch zwischen Mentees, Eltern und mir
- **Übersicht** - Alle Aktivitäten und Fortschritte an einem Ort

### Öffentliches Diskussionsforum

Für allgemeine Fragen und Austausch gibt es ein [öffentliches Diskussionsforum](https://github.com/levins-coding-class/website/discussions). Hier können:

- **Eltern** Fragen zum Kurs stellen oder Erfahrungen teilen
- **Mentees** sich gegenseitig helfen und Ideen austauschen
- **Alle** Ankündigungen und Updates verfolgen

Das Forum ist öffentlich einsehbar - so können auch interessierte Eltern vorab einen Eindruck vom Kurs bekommen.

### Für technische Probleme
- GitHub Issues im Kurs-Repository
- Video-Calls nach Vereinbarung

### Für organisatorische Fragen
- GitHub Discussions oder direkter Kontakt

## Häufig gestellte Fragen

### Mein Kind hat keine Programmiererfahrung. Ist das ein Problem?
Nein! Das Mentoring beginnt bei null und ich erkläre alle Konzepte von Grund auf.

### Wie viel Unterstützung braucht mein Kind?
Am Anfang ist etwas Unterstützung bei der Einrichtung nötig. Danach sollen die Kinder zunehmend selbstständig arbeiten. Hilfe ist aber jederzeit verfügbar.

### Wir haben nur einen Windows-Computer. Geht das trotzdem?
WSL 2 funktioniert als Notlösung, ist aber nicht ideal. Ich empfehle einen günstigen Linux-Rechner (z.B. Raspberry Pi 500+ für ~200 EUR). Die bessere Linux-Unterstützung macht das Arbeiten deutlich reibungsloser.

### Kann mein Kind auch schneller oder langsamer voranschreiten?
Absolut! Jedes Kind arbeitet in seinem eigenen Tempo. Es gibt keinen festen Lehrplan mit Deadlines.

### Was passiert, wenn mein Kind technische Probleme hat?
Dank Fernzugriff können die meisten Probleme schnell gelöst werden. Bei größeren Problemen vereinbare ich einen Video-Call mit dir.

### Muss ich als Elternteil technische Kenntnisse haben?
Nein, das ist nicht notwendig. Alle technischen Aspekte werden über den Fernzugriff oder in Video-Calls geklärt.

### Kann mein Kind auf einem Tablet teilnehmen?
Nein, leider nicht. Tablets (iPad, Android) sind für Programmierung grundsätzlich ungeeignet. Es wird zwingend ein Computer mit physischer Tastatur und Maus benötigt.

## Datenschutz

- Alle Arbeiten der Kinder werden in einem **privaten GitHub-Repository** gespeichert
- Nur autorisierte Personen haben Zugriff
- Fernzugriff erfolgt nur nach ausdrücklicher Genehmigung

## Los geht's!

Wenn du Interesse hast:

1. Stelle sicher, dass die Hardware-Anforderungen erfüllt sind
2. Kontaktiere mich für ein Onboarding-Gespräch
3. Wir richten zusammen alles ein

Ich freue mich darauf, dein Kind zu begleiten!

[^1]: Eine flache Lernkurve ergibt sich, wenn man trotz hohem Arbeitsaufwand wenig Fortschritt macht, die Komplexität der Aufgabe also hoch ist. Die Steigung der Lernkurve ist also gering und die Kurve sieht "flach" aus. Die wenigsten Leute verstehen das und meistens wird "steile Lernkurve" für schwierig zu lernenden Inhalte verwendet, was logisch keinen Sinn macht.
