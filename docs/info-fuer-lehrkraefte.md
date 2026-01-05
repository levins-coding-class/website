---
sidebar_position: 4
---

# Informationen für Lehrkräfte und Pädagogen

Diese Seite richtet sich an Lehrkräfte, Pädagogen und andere Bildungseinrichtungen, die einen ähnlichen Programmierkurs für Kinder aufsetzen möchten.

## Überblick und Struktur dieses Dokuments

**Wichtig:** Dieses Dokument ist lang, aber es ist essentiell, dass du es **vollständig liest**, um das Kurskonzept zu verstehen.

**Die logische Struktur:**

1. **Konzept und Philosophie** - Was ist das Grundprinzip des Kurses?
2. **DER ENTSCHEIDENDE PUNKT: Reproduzierbare Problemkommunikation** - Dies ist das Herzstück des Kurses
3. **Warum Git?** - Wie Git den entscheidenden Punkt ermöglicht
4. **Warum Typst?** - Warum textbasierte Formate essentiell sind
5. **Warum KEINE Microsoft Office Produkte?** - Detaillierte Case Study: Kollaboration
6. **Praktische Umsetzung** - Wie setze ich das konkret um?
7. **Gängige Fehler vermeiden** - Kritische Punkte, die den Kurs scheitern lassen können
8. **Pädagogische Prinzipien** - Die Grundwerte des Kurses

**Wenn du nur wenig Zeit hast, lies mindestens:**
- Abschnitt 2: "Der entscheidende Punkt" (der Kern von allem)
- Abschnitt 7: "Gängige Fehler vermeiden" (verhindere die größten Probleme)

Aber idealerweise: **Lies alles.** Es wird dir viel Zeit und Frustration später ersparen.

## Konzept und Philosophie

### Programmieren, nicht Informatik

**Wichtige Unterscheidung:** Dies ist ein **Programmierkurs**, kein Informatik-Kurs.

**Was wir NICHT machen:**
- Höhere Informatik-Konzepte
- Komplexe Algorithmen (Sortieralgorithmen, Pledge-Algorithmus für Labyrinth-Navigation, etc.)
- Theoretische Computergrundlagen
- Akademische Abstraktion

**Was wir MACHEN:**
- Kinder lernen die **verschiedenen Ebenen der Programmierung**:
  1. **Versionskontrolle** (Git) - Wie verwalte ich meinen Code?
  2. **Markup-Sprachen/Programmiersprachen** (Typst, Markdown, React) - Wie schreibe ich Code?
  3. **Resultierendes Ergebnis** (PDF-Dokument, Webseite) - Was entsteht aus meinem Code?

### Das Problem typischer Programmierkurse

Viele Kinder-Programmierkurse leiden unter einem fundamentalen Problem: **zu hohe Abstraktionsebene**.

**Typisches Szenario:**
- Kinder programmieren in einer speziellen Umgebung (z.B. Scratch auf Schulcomputern)
- Die Ergebnisse existieren nur in dieser geschlossenen Welt
- Kinder können ihre Arbeit NICHT teilen mit:
  - Oma und Opa
  - Freunden auf dem Pausenhof
  - Tante und Onkel
  - Zu Hause auf anderen Geräten

**Das Resultat:**
- Geringe gefühlte Wirksamkeit
- "Was ich mache, ist nicht wirklich real"
- Mangelnde Motivation
- Keine Verbindung zur echten Welt

### Unsere Lösung: Gefühlte Wirksamkeit durch echte Ergebnisse

**Der Schlüssel:** Kinder erstellen Dinge, die **in der echten Welt existieren** und die sie **teilen können**.

**Was normalerweise als "Beiwerk" gilt, ist für uns ESSENTIELL:**

1. **Kompilieren** - Code wird zu einem echten Ergebnis (PDF, Webseite)
2. **Hosting** - Die Webseite ist im Internet verfügbar
3. **Domains** - Eine richtige Adresse (z.B. `max-projekt.de`)
4. **Continuous Deployment** - Änderungen gehen automatisch live
5. **Apps** - Etwas, das man auf dem Handy öffnen kann
6. **Authentifizierung** - "Meine" Inhalte vs. andere Nutzer

**Warum das essentiell ist:**

Diese technischen Details ermöglichen es Kindern:
- Ihre Großeltern die selbst erstellte Webseite zu zeigen
- Freunden den Link zu schicken: "Schau mal, was ich gemacht habe!"
- Zu Hause am Tablet das Ergebnis zu sehen
- Stolz zu sein auf etwas **Echtes**

**Beispiel-Szenario:**

❌ **Typischer Kurs:**
> "Ich habe heute in Scratch ein Spiel programmiert!"
> "Cool, kann ich es sehen?"
> "Nee, geht nur auf dem Computer in der Schule..."

✅ **Unser Kurs:**
> "Ich habe heute eine Webseite über mein Hobby gemacht!"
> "Cool, kann ich es sehen?"
> "Klar! Hier, öffne mal: www.max-fussball.de"

**Der Unterschied:** Im zweiten Fall fühlt das Kind echte Wirksamkeit. Es hat etwas geschaffen, das **real ist**, das **andere sehen können**, das **in der Welt existiert**.

## Der entscheidende Punkt: Reproduzierbare Problemkommunikation

**Dies ist DER zentrale pädagogische Punkt des gesamten Kurses.**

### Das Problem, das gelöst werden muss

Stell dir vor: Ein Kind (nennen wir es Lisa) sitzt vor ihrem Computer und versucht, in Typst die Farbe eines Textes zu ändern. Sie probiert verschiedene Dinge aus, aber nichts funktioniert. Sie weiß nicht, wie sie weiterkommen soll.

**Die entscheidende Frage:** Wie kann Lisa jetzt Hilfe bekommen?

### Die traditionelle (schlechte) Lösung

**Typisches Szenario in klassischen Kursen:**

Lisa fragt: "Es funktioniert nicht!"

**Das Problem dabei:**
- Was genau funktioniert nicht?
- Was hat Lisa versucht?
- Wie sieht ihr Code aus?
- Welche Fehlermeldung erscheint?

Der Helfer (Lehrer, Eltern, Freund) kann das Problem **nicht reproduzieren**, weil er nicht weiß, was Lisa genau gemacht hat.

**Resultat:**
- Vage Vermutungen: "Hast du mal versucht...?"
- Hin und her Kommunikation: "Zeig mal... nein, das andere... wo war das nochmal?"
- Frustration auf beiden Seiten
- Ineffektive Hilfe

### Die moderne (richtige) Lösung: Git + GitHub Issues

**Was Lisa lernen muss:**

Lisa muss ihr Problem so kommunizieren, dass andere es **bei sich reproduzieren** können.

**Der Workflow:**

**1. Lisa hat ein Problem:**
```typst
// In ihrer Datei dinosaurier.typ
#text("Der T-Rex war gefährlich")
// Sie will den Text rot machen, weiß aber nicht wie
```

**2. Lisa erstellt ein GitHub Issue:**

Titel: "Wie kann ich Text rot färben?"

Beschreibung:
```markdown
Ich versuche, Text rot zu färben, aber ich weiß nicht wie.

Mein Code:
`#text("Der T-Rex war gefährlich")`

Ich habe versucht:
`#text(red)("Der T-Rex war gefährlich")`
Aber das gibt einen Fehler.

Repository: https://github.com/lisa/dinosaurier
Datei: `dinosaurier.typ`, Zeile 12
Commit: abc123
```

**3. Der Helfer (z.B. Lehrer) kann das Problem EXAKT reproduzieren:**

```bash
# Helfer auf seinem Computer:
git clone https://github.com/lisa/dinosaurier
cd dinosaurier
git checkout abc123
# Helfer öffnet dinosaurier.typ, Zeile 12
# Helfer sieht EXAKT das gleiche wie Lisa
# Helfer kann das Problem nachvollziehen
```

**4. Der Helfer erstellt eine Lösung:**

```typst
// Richtig ist:
#text(fill: red)[Der T-Rex war gefährlich]
```

**5. Der Helfer übermittelt die Lösung:**

- Entweder als Kommentar im Issue
- Oder als Pull Request mit der fertigen Lösung
- Lisa kann die Änderung direkt übernehmen

### Warum das fundamental anders ist

| Aspekt | Traditionell | Mit Git + GitHub |
|--------|-------------|------------------|
| **Problem beschreiben** | Vage: "Es geht nicht" | Präzise: Link zu Datei, Zeile, Commit |
| **Problem reproduzieren** | Unmöglich ohne Zugriff auf Lisas Computer | Jeder kann `git clone` machen |
| **Helfer sieht** | Nichts oder Screenshots | Exakt den gleichen Code |
| **Lösung übertragen** | Lisa muss abtippen oder Screenshot nachbauen | `git pull` oder Copy-Paste |
| **Lerneffekt** | Gering - Lisa lernt nicht, Probleme zu kommunizieren | Hoch - Lisa lernt strukturierte Problemkommunikation |

### Das ist die Kernkompetenz

**Was Kinder in diesem Kurs WIRKLICH lernen:**

Nicht nur Programmieren, sondern:

1. **Probleme strukturiert beschreiben**
   - Was ist das Problem?
   - Wo tritt es auf?
   - Was habe ich versucht?
   - Was war das Ergebnis?

2. **Reproduzierbare Bedingungen schaffen**
   - Code in Git Repository
   - Genaue Datei und Zeile angeben
   - Commit-Hash mitteilen
   - Andere können exakt nachvollziehen

3. **Asynchrone Kommunikation beherrschen**
   - GitHub Issues als strukturierte Plattform
   - Keine Echtzeit-Kommunikation nötig
   - Dokumentiert für später

4. **Von anderen lernen**
   - Lösungen sind nachvollziehbar
   - Historie zeigt, wie Problem gelöst wurde
   - Andere können von Lisas Problem lernen

### Warum das NUR mit Git funktioniert

**Vergleich mit anderen Tools:**

#### ❌ Microsoft Word
- **Problem:** Kind kann Word-Dokument nicht formatieren
- **Kommunikation:** "Es funktioniert nicht!"
- **Reproduktion:** Unmöglich - Word-Datei ist binär, nicht versionierbar
- **Helfer muss:** Entweder vor Ort sein oder endlose Screenshots austauschen
- **Resultat:** Ineffektiv, frustrierend

#### ❌ Scratch
- **Problem:** Kind hat Bug in Scratch-Projekt
- **Kommunikation:** "Mein Spiel geht nicht!"
- **Reproduktion:** Schwierig - Scratch-Projekt muss exportiert/geteilt werden
- **Helfer muss:** Scratch-Datei herunterladen, öffnen, verstehen
- **Resultat:** Mühsam, keine strukturierte Versionskontrolle

#### ✅ Typst + Git
- **Problem:** Kind kann Text nicht färben
- **Kommunikation:** Link zu GitHub Repository, Datei, Zeile, Commit
- **Reproduktion:** `git clone` + `git checkout` - fertig
- **Helfer hat:** EXAKT den gleichen Zustand wie das Kind
- **Resultat:** Effizient, professionell, lehrreich

### Der Lernprozess

**Anfangs:** Kinder sind schlecht darin, Probleme zu beschreiben
```markdown
"Es geht nicht!"
```

**Nach ein paar Wochen:** Kinder lernen strukturierter zu kommunizieren
```markdown
"Mein Text wird nicht rot. Ich habe versucht #text(red)(...) aber es gibt einen Fehler."
```

**Nach ein paar Monaten:** Kinder beherrschen professionelle Problemkommunikation
```markdown
"Ich versuche Text rot zu färben.

Repository: https://github.com/lisa/dinosaurier
Datei: dinosaurier.typ, Zeile 12
Commit: abc123

Aktueller Code:
#text(red)("Der T-Rex war gefährlich")

Fehlermeldung:
Error: Expected content, found color

Ich habe bereits versucht:
- #text(red)[...]  -> Gleiches Problem
- #color(red, "...") -> Funktion nicht gefunden

Was ist der richtige Syntax?"
```

**Das ist echte Kompetenz!** Diese Fähigkeit ist übertragbar auf:
- Jede Programmiersprache
- Jedes Projekt
- Jede Kollaboration
- Jede professionelle Arbeit

### Warum das für Lehrer entscheidend ist

**Als Lehrer musst du verstehen:**

Dies ist NICHT nur ein technisches Detail ("Git ist nützlich"). Dies ist **DAS zentrale Lernziel** des Kurses.

**Erfolg bedeutet:**
- Kind kann Problem reproduzierbar beschreiben
- Kind kann GitHub Issue erstellen
- Kind kann anderen ermöglichen, das Problem bei sich zu reproduzieren
- Kind kann Lösungen empfangen und integrieren

**Wenn ein Kind das beherrscht:**
- Es kann JEDE Programmiersprache lernen
- Es kann in JEDEM Team arbeiten
- Es kann JEDES Open-Source-Projekt nutzen
- Es ist bereit für echte Softwareentwicklung

### Die Brücke zur echten Welt

**In der professionellen Softwareentwicklung:**

Genau so arbeiten Teams:
1. Entwickler hat Bug
2. Erstellt Issue mit präziser Beschreibung
3. Andere können Bug reproduzieren
4. Lösung wird entwickelt
5. Pull Request mit Lösung
6. Code Review
7. Merge

**Kinder lernen exakt diesen Workflow** - von Anfang an, mit echten Tools.

### Direkt zu echten Tools

Dieser Kurs verfolgt einen **radikal anderen Ansatz** als die meisten Kinder-Programmierkurse:

**Statt:**
- Scratch, Blockly und andere visuelle Programmierumgebungen
- Vereinfachte "Kinder-Tools"
- Schrittweise Einführung über Jahre hinweg

**Nutzen wir:**
- Git & GitHub - echte Versionskontrolle
- VS Code - professionelle IDE
- Typst - moderne Markup-Sprache
- Später: React, Astro - moderne Web-Technologien

### Warum dieser Ansatz?

**Das Problem der "Scratch-Falle":**
- Kinder verbringen Jahre mit visuellen Block-Systemen
- Der Sprung zu echtem Code ist riesig und frustrierend
- Viele geben auf, weil sie "wieder von vorne anfangen" müssen
- Verschwendete Zeit - nichts davon ist auf echte Entwicklung übertragbar

**Unser Ansatz:**
- Kinder lernen von Anfang an die richtigen Tools
- Die Lernkurve ist anfangs flacher[^1], aber **alles Gelernte ist sofort wertvoll**
- Kinder entwickeln echte, übertragbare Fähigkeiten
- Nach 6-12 Monaten können sie bereits mit professionellen Tools arbeiten

## Warum Git? - Die Tools-Perspektive

Jetzt, wo du den zentralen Punkt verstehst (reproduzierbare Problemkommunikation), wird klar, warum Git **nicht optional** ist, sondern **essentiell**.

Git ist das wichtigste Tool in der modernen Softwareentwicklung. Hier sind die Gründe, warum wir es **von Anfang an** einsetzen:

### 1. Reproduzierbare Problemkommunikation ermöglichen (DER HAUPTGRUND!)

**Ohne Git:**
- Kind hat Problem → kann es nicht teilen
- Helfer kann Problem nicht reproduzieren
- Ineffektive Hilfe

**Mit Git:**
- Kind hat Problem → pusht Code zu GitHub
- Kind erstellt Issue mit Link zu Repository, Datei, Zeile, Commit
- Helfer: `git clone` + `git checkout` → hat EXAKT den gleichen Zustand
- Helfer kann Problem reproduzieren und lösen

**Dies ist der fundamentale Grund, warum Git im Kurs unverzichtbar ist.**

### 2. Versionskontrolle verstehen

Kinder lernen früh:
- Wie man Änderungen verfolgt
- Wie man zu früheren Versionen zurückkehrt
- Wie man mit anderen zusammenarbeitet
- Wie man Konflikte löst

**Pädagogischer Wert:**
- Fehler sind nicht schlimm - man kann immer zurück
- Experimentieren wird gefördert
- Verantwortung für eigene Änderungen

### 3. Asynchrone Kommunikation

Über GitHub Issues und Discussions lernen Kinder:
- Probleme klar zu beschreiben (wie oben im zentralen Abschnitt gezeigt)
- Screenshots und Beispiele bereitzustellen
- Feedback konstruktiv zu geben und anzunehmen
- Schriftliche Kommunikation in technischen Kontexten

### 4. Portfolio aufbauen

Ab dem ersten Tag erstellen Kinder ein **nachweisbares Portfolio**:
- Alle Projekte sind auf GitHub sichtbar
- Commit-Historie zeigt kontinuierliches Lernen
- Später für Bewerbungen wertvoll

### 4. Professionelle Arbeitsweise

Kinder lernen den **echten Workflow** von Entwicklern:
```bash
git add .
git commit -m "Add feature X"
git push
```

Dies sind die gleichen Befehle, die sie später als professionelle Entwickler verwenden werden.

## Warum Typst? - Die Content-Perspektive

Typst ist mehr als nur ein "Word-Ersatz" - es ist das **perfekte erste Projekt-Format** für den Kurs, weil es die reproduzierbare Problemkommunikation optimal unterstützt.

### 1. Text-basiertes Format ermöglicht Reproduzierbarkeit (DER HAUPTGRUND!)

**Das Problem mit Word:**
- Word-Dateien (.docx) sind binär
- Git kann nicht zeigen, WAS genau geändert wurde
- "Zeile 42 wurde geändert" - unmöglich bei binären Dateien
- Reproduzierbarkeit: Nicht gegeben

**Die Lösung mit Typst:**
- Typst-Dateien (.typ) sind **reiner Text**
- Git kann exakt zeigen: "Zeile 42: `#text("alt")` → `#text("neu")`"
- Jede Änderung ist nachvollziehbar
- **Reproduzierbarkeit: Perfekt gegeben**

**Praktisches Beispiel:**

Lisa hat Problem mit Typst-Datei:
```bash
# Helfer:
git clone https://github.com/lisa/projekt
git checkout abc123
cat dokument.typ | grep -n "rot"
# Zeile 42: #text(red)("Der T-Rex")
# Helfer sieht EXAKT was Lisa geschrieben hat
# Helfer kann exakt reproduzieren
```

**Das geht NUR mit textbasierten Formaten!**

### 2. Markup-Sprachen verstehen

Kinder lernen das fundamentale Konzept von **Markup-Sprachen**:
- Inhalt und Darstellung trennen
- Code schreiben, um Output zu generieren
- Deklarative Programmierung

**Übertragbar auf:**
- HTML/CSS (Web-Entwicklung)
- Markdown (überall verwendet)
- LaTeX (Wissenschaft)
- XML/JSON (Datenformate)

### 2. Niedrige Einstiegshürde bei echtem Code

Anders als bei React oder anderen Programmiersprachen:
- Typst-Syntax ist relativ einfach
- Sofortiges visuelles Feedback (PDF)
- Aber: Es ist ECHTER Code, keine vereinfachte Block-Programmierung
- Perfekt als erstes Projekt

### 3. Programmierbare Dokumente

Kinder entdecken, dass man Dokumente **programmieren** kann:
```typst
#let title = "Mein Projekt"
#let author = "Max Mustermann"

#align(center)[
  #text(24pt)[*#title*]
  #v(1em)
  von #author
]
```

Dies öffnet die Tür zu:
- Variablen und Funktionen
- Loops und Conditionals
- Automatisierung

### 4. Ästhetik und Professionalität

Typst generiert **schöne PDFs**:
- Professionelles Layout
- Mathematische Formeln
- Diagramme und Grafiken
- Kinder sind stolz auf ihre Ergebnisse

### 5. Markup-Sprachen als Brücke

Typst ist eine Brücke zwischen:
- **Anfang:** Einfacher als Programmiersprachen (JavaScript, Python)
- **Ende:** Vorbereitung auf HTML, Markdown, etc.
- **Überall:** Konzept von "Code → Output" verstehen

## Warum KEINE Microsoft Office Produkte?

Diese Empfehlung mag kontrovers erscheinen, aber sie ist gut begründet:

### 1. Proprietäre Software

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

### 2. Veraltetes Paradigma

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

### 3. Vendor Lock-in vermeiden

Kinder an Microsoft zu gewöhnen bedeutet:
- Abhängigkeit von einem Anbieter
- Kostenpflichtige Software wird "normal"
- Schwieriger Wechsel zu Alternativen später
- Eingeschränkte Kreativität

### 4. Zukunftsorientierung

Die Arbeitswelt bewegt sich weg von Office:
- Entwickler nutzen Markdown, nicht Word
- Daten werden in JSON/YAML gespeichert, nicht Excel
- Präsentationen werden mit Code erstellt (reveal.js, etc.)
- Kollaboration passiert über Git, nicht per Email mit Anhängen

### 5. Kollaboration und Versionskontrolle - Der entscheidende Punkt

**Das ist der wichtigste Grund gegen Word:** Kollaboration im Internet ist essentiell für moderne Arbeit, und **Word macht hier den schlechtesten Job aller Zeiten**.

#### Das fundamentale Problem: Keine strukturierte Datenbasis

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

## Case Study: Word vs. Typst bei Kollaboration

Stell dir vor: **Zwei Kinder arbeiten zusammen an einem Dokument über Dinosaurier.**

### Szenario 1: Mit Microsoft Word

**Tag 1 - Anna startet:**
- Anna erstellt `dinosaurier.docx`
- Schreibt Abschnitt über T-Rex
- Schickt per Email an Ben

**Tag 2 - Ben arbeitet:**
- Ben öffnet die Datei
- Fügt Abschnitt über Triceratops hinzu
- Ändert ein bisschen am T-Rex Text
- Speichert als `dinosaurier_ben.docx`
- Schickt per Email zurück an Anna

**Tag 3 - Anna will weiterarbeiten:**
- Anna hat inzwischen auch weitergearbeitet
- Ihre Version: `dinosaurier_anna_v2.docx`
- Jetzt hat sie ZWEI verschiedene Dateien
- **Problem: Wie kombiniert sie Bens Änderungen mit ihren?**

**Die schreckliche Realität:**
```
dinosaurier.docx
dinosaurier_ben.docx
dinosaurier_anna_v2.docx
dinosaurier_final.docx
dinosaurier_final_v2.docx
dinosaurier_wirklich_final.docx
dinosaurier_jetzt_aber_wirklich_final.docx
```

**Konflikt-Resolution in Word:**
1. Anna öffnet beide Dateien nebeneinander
2. Sie scrollt hin und her
3. Sie versucht zu sehen, was Ben geändert hat
4. Sie kopiert manuell Bens Änderungen in ihre Datei
5. Sie übersieht dabei, dass Ben auch ihren T-Rex Text verbessert hat
6. **Bens Verbesserung geht verloren**
7. Frustration!

**Word "Track Changes" Feature:**
- Funktioniert nur, wenn EINER arbeitet und der andere reviewt
- Bei gleichzeitiger Arbeit: Chaos
- Zeigt zu viele irrelevante Änderungen (Formatierung, etc.)
- Konflikte müssen manuell resolved werden
- Keine automatische Merge-Möglichkeit

### Szenario 2: Mit Typst + Git

**Tag 1 - Anna startet:**
```bash
# Anna erstellt Repository
git init dinosaurier-projekt
cd dinosaurier-projekt
# Anna schreibt in dinosaurier.typ
git add dinosaurier.typ
git commit -m "Add T-Rex section"
git push
```

**Tag 2 - Ben arbeitet:**
```bash
# Ben klont das Repository
git clone [url] dinosaurier-projekt
cd dinosaurier-projekt
# Ben arbeitet an der gleichen Datei
git add dinosaurier.typ
git commit -m "Add Triceratops section and improve T-Rex text"
git push
```

**Tag 3 - Anna will weiterarbeiten:**
```bash
# Anna holt Bens Änderungen
git pull
# Git zeigt exakt, was Ben geändert hat:
# + Zeile 42: Neue Info über Triceratops
# ~ Zeile 15: Verbesserung im T-Rex Text
```

**Wenn beide gleichzeitig gearbeitet haben:**

Anna's Version (Zeile 20-25):
```typst
= T-Rex
Der T-Rex war ein gefährlicher Jäger.
Er lebte vor 65 Millionen Jahren.
Seine Zähne waren sehr scharf.
```

Ben's Version (Zeile 20-25):
```typst
= T-Rex
Der T-Rex war ein gefährlicher Jäger.
Er lebte vor 65 Millionen Jahren.
Er konnte bis zu 40 km/h schnell laufen.
```

**Git macht automatisch:**
```bash
git pull
# Auto-merging dinosaurier.typ
# CONFLICT (content): Merge conflict in dinosaurier.typ
```

**Git zeigt exakt den Konflikt:**
```typst
= T-Rex
Der T-Rex war ein gefährlicher Jäger.
Er lebte vor 65 Millionen Jahren.
<<<<<<< HEAD (Anna's Version)
Seine Zähne waren sehr scharf.
=======
Er konnte bis zu 40 km/h schnell laufen.
>>>>>>> origin/main (Ben's Version)
```

**Anna löst den Konflikt:**
```typst
= T-Rex
Der T-Rex war ein gefährlicher Jäger.
Er lebte vor 65 Millionen Jahren.
Er konnte bis zu 40 km/h schnell laufen.
Seine Zähne waren sehr scharf.
```

**Fertig!**
```bash
git add dinosaurier.typ
git commit -m "Merge: Combine speed info and teeth info"
git push
```

### Vergleich: Word vs. Typst+Git

| Aspekt | Word | Typst + Git |
|--------|------|-------------|
| **Versionskontrolle** | Manuell (Dateinamen) | Automatisch (Git) |
| **Änderungen sehen** | Datei öffnen, vergleichen | `git diff` - exakt Zeile für Zeile |
| **Gleichzeitig arbeiten** | Chaos, Datei-Duplikate | Funktioniert, Git mergt automatisch |
| **Konflikte** | Manuell suchen und fixen | Git zeigt exakt wo Konflikt ist |
| **Konflikt-Resolution** | Stundenlang Dateien vergleichen | Minuten: Konflikt markiert, resolved, fertig |
| **Historie** | Alte Dateien aufheben | Komplette Historie in Git |
| **Zurückgehen** | "Undo" oder alte Datei suchen | `git checkout` zu jeder beliebigen Version |
| **Wer hat was geändert** | Keine Ahnung oder Track Changes Chaos | `git blame` zeigt exakt wer was wann |
| **Zusammenführen** | Manuell copy-paste | `git merge` automatisch |
| **Code Review** | Unmöglich | Pull Requests, Comments, Approve |

### Warum das für Kinder essentiell ist

**Moderne Arbeit ist kollaborativ:**
- Software wird IMMER im Team entwickelt
- Open Source: Hunderte Menschen arbeiten am gleichen Projekt
- Kinder müssen lernen, wie echte Kollaboration funktioniert

**Word ist ein Relikt aus der Einzelarbeiter-Ära:**
- "Ein Mensch, ein Computer, ein Dokument"
- Internet-Kollaboration wurde nachträglich aufgepfropft
- Microsoft 365 ist Krücke, kein echtes Kollaborations-Tool

**Git ist für Kollaboration gebaut:**
- Von Anfang an für Teams designed
- Linux Kernel: 10.000+ Entwickler, ein Projekt
- Funktioniert einwandfrei

**Wenn Kinder Word lernen:**
- Sie lernen ein veraltetes Modell
- Sie müssen später umlernen
- Sie verstehen echte Internet-Kollaboration nicht

**Wenn Kinder Typst + Git lernen:**
- Sie lernen von Anfang an richtige Kollaboration
- Sie können sofort an Open Source Projekten teilnehmen
- Sie verstehen, wie die moderne Arbeitswelt funktioniert

### Praktisches Beispiel: Gemeinsames Kochbuch-Projekt

**Aufgabe:** 5 Kinder erstellen zusammen ein Kochbuch mit ihren Lieblingsrezepten.

**Mit Word:**
- Chaos mit `kochbuch_final_v23.docx`
- Ein Kind überschreibt versehentlich Rezepte von anderen
- Keine Möglichkeit herauszufinden, wer was geschrieben hat
- Formatierung wird bei jedem Merge zerstört
- Frustrierend und zeitaufwändig

**Mit Typst + Git:**
- Jedes Kind arbeitet in seinem Branch
- Pull Requests für neue Rezepte
- Andere Kinder können Rezepte reviewen und kommentieren
- Automatisches Merging in Hauptdokument
- Historie zeigt, wer welches Rezept beigetragen hat
- Bei Konflikten (z.B. zwei Kinder haben "Spaghetti" Rezept): Git zeigt Konflikt, Kinder entscheiden gemeinsam

**Das lernen Kinder dabei:**
- Asynchrone Zusammenarbeit
- Code Review Prozess
- Konflikt-Resolution
- Verantwortung für eigene Beiträge
- Wie echte Teams arbeiten

## Alternativen zu Microsoft Office im Kurs

### Statt Word → Typst / Markdown

**Typst:**
- Schöne Dokumente mit Code
- PDF-Export
- Versionskontrollierbar
- Programmierbar

**Markdown:**
- Einfach zu lernen
- Überall verwendet (GitHub, Blogs, Dokumentation)
- Leichtgewichtig
- Fokus auf Inhalt

### Statt Excel → CSV / JSON / YAML

**CSV:**
- Textbasiert
- In jedem Tool öffenbar
- Mit Git versionierbar
- Programmatisch verarbeitbar

**JSON/YAML:**
- Strukturierte Daten
- Maschinenlesbar
- In jeder Programmiersprache nutzbar
- APIs verwenden JSON

### Statt PowerPoint → reveal.js / Markdown

**reveal.js:**
- Präsentationen mit HTML/JavaScript
- Versionskontrollierbar
- Schöne Animationen
- Code-Beispiele direkt einbettbar

**Markdown-basierte Lösungen:**
- Marp
- Slidev
- Pitch

## Praktische Umsetzung

### Kursstruktur

**Phase 1: Grundlagen (2-3 Monate)**
1. Git & GitHub Setup
2. VS Code kennenlernen
3. Typst-Projekte erstellen
4. Issues und Discussions nutzen

**Phase 2: Web-Entwicklung (variabel)**
1. Markdown
2. JSON/YAML
3. React
4. Astro

### Die Ebenen der Programmierung im Kurs

Ein zentrales Konzept dieses Kurses ist, dass Kinder die **verschiedenen Ebenen** verstehen lernen, die zusammenwirken:

**Ebene 1: Versionskontrolle (Git)**
- Wo speichere ich meinen Code?
- Wie verfolge ich Änderungen?
- Wie teile ich mit anderen?

**Ebene 2: Code schreiben (Typst, Markdown, React)**
- Wie drücke ich aus, was ich möchte?
- Welche Syntax verwende ich?
- Wie strukturiere ich meinen Code?

**Ebene 3: Kompilierung/Build**
- Wie wird aus meinem Code ein Ergebnis?
- Was passiert im Hintergrund?
- Warum sieht das Ergebnis so aus?

**Ebene 4: Deployment/Hosting**
- Wie kommt mein Ergebnis ins Internet?
- Wo "lebt" meine Webseite?
- Wie können andere darauf zugreifen?

**Ebene 5: Teilen und Nutzen**
- Wie können andere meine Arbeit sehen?
- Wie funktioniert eine Domain?
- Wie kann ich Zugriff kontrollieren?

**Wichtig:** Diese technischen Details sind KEINE "nice-to-have" Extras, sondern **essentielle Grundlagen** für:
- Gefühlte Wirksamkeit
- Motivation
- Verständnis der echten Welt
- Praktische Anwendbarkeit

### Asynchrones Lernen

Der Kurs ist bewusst **asynchron** aufgebaut:
- Kinder arbeiten in ihrem eigenen Tempo
- Keine festen Deadlines
- Individuelle Unterstützung über GitHub
- Optional: Gruppen-Sessions zum Austausch

**Vorteile:**
- Kein Leistungsdruck
- Jedes Kind kann sein Tempo finden
- Weniger Frustration
- Besseres Verständnis

### Technische Infrastruktur

**Empfohlenes Setup:**
- **[Raspberry Pi 500+](https://www.raspberrypi.com/products/raspberry-pi-500-plus/)** (~200 EUR pro Kind)
  - Komplett-System mit 256GB NVMe und 16GB RAM
  - Linux vorinstalliert
  - Ausreichend für alle Kursinhalte
  - Pädagogisch wertvoll (eigener Computer!)
  - **Wichtig:** Pi 500+ kaufen, nicht den normalen Pi 500 (SD-Karte zu langsam!)

**Software (alles kostenlos):**
- Linux (Ubuntu, Raspberry Pi OS, etc.)
- VS Code
- Git
- Typst
- Node.js (später)

### Fernbetreuung

**Technischer Support:**
- Fernzugriff auf Schüler-Computer
- Schnelle Problemlösung
- Video-Calls bei Bedarf

**Kommunikation:**
- GitHub Issues für technische Probleme
- GitHub Discussions für allgemeine Fragen
- Asynchrone Kommunikation bevorzugt

## Hilfreiches Material

### Ressourcen für den Kursaufbau

**Git:**
- [Pro Git Book](https://git-scm.com/book/de/v2) - Kostenlos, umfassend
- [GitHub Guides](https://guides.github.com/) - Kurze, praktische Anleitungen
- [Learn Git Branching](https://learngitbranching.js.org/?locale=de_DE) - Interaktives Tutorial

**Typst:**
- [Typst Documentation](https://typst.app/docs) - Offizielle Dokumentation
- [Typst Examples](https://typst.app/docs/tutorial) - Tutorial mit Beispielen
- [Typst Universe](https://typst.app/universe) - Templates und Packages

**VS Code:**
- [VS Code Docs](https://code.visualstudio.com/docs) - Offizielle Dokumentation
- [VS Code for Education](https://code.visualstudio.com/learn) - Lern-Ressourcen

### Kursbeispiele und Templates

**Starter-Projekte:**
- Einfaches Typst-Dokument als erste Übung
- Git-Repository-Template für neue Schüler
- Onboarding-Checkliste

**Projekt-Ideen:**
- Persönliche Vorstellung (Typst)
- Dokumentation eines Hobbys
- Kleine Geschichte oder Comic
- Technische Anleitung
- Rezeptsammlung

### Community und Support

**GitHub-Organisation:**
Alle Kursmaterialien und Projekte sind in der [GitHub-Organisation "levins-coding-class"](https://github.com/orgs/levins-coding-class) gebündelt.

**Öffentliches Diskussionsforum:**
Für allgemeine Fragen und Austausch gibt es ein [öffentliches Diskussionsforum](https://github.com/levins-coding-class/website/discussions). Hier können Lehrkräfte, Eltern und Mentees Erfahrungen teilen und Fragen stellen.

**Open Source Philosophie:**
- Alle Kursmaterialien können frei verwendet werden
- Ermutige Schüler, zu Open Source beizutragen
- Zeige, wie echte Entwickler zusammenarbeiten

**Austausch mit anderen Lehrkräften:**
- GitHub Discussions in diesem Repository
- Fragen und Erfahrungen teilen
- Von anderen lernen

## Pädagogische Prinzipien

### 1. Gefühlte Wirksamkeit an erster Stelle

**Das wichtigste Prinzip:** Kinder müssen **fühlen**, dass ihre Arbeit etwas bewirkt.

**Warum das entscheidend ist:**
- Motivation entsteht durch echte Ergebnisse
- "Ich habe etwas erschaffen, das existiert"
- Andere Menschen können meine Arbeit sehen und nutzen
- Stolz und Selbstbewusstsein durch echte Leistung

**Wie wir das umsetzen:**
- Jedes Projekt hat ein **teilbares Ergebnis** (PDF, Webseite, Link)
- Kinder können ihre Arbeit Freunden und Familie zeigen
- Ergebnisse sind auf verschiedenen Geräten zugänglich
- Keine "geschlossene Schulwelt", sondern echte Online-Präsenz

**Konkrete Beispiele:**
- Ein Typst-PDF kann per Email an Oma geschickt werden
- Eine Webseite hat eine echte URL, die auf dem Pausenhof geteilt werden kann
- Ein React-Projekt kann auf dem Handy der Eltern geöffnet werden
- GitHub-Profil zeigt echte Arbeit (wie ein Portfolio)

### 2. Hands-On Learning

Kinder lernen durch **praktisches Tun**:
- Sofort echte Projekte erstellen
- Nicht nur Theorie
- Experimentieren ist erwünscht

### 3. Fehlerkultur

Fehler sind **Teil des Lernprozesses**:
- Git ermöglicht risikofreies Experimentieren
- Fehler können rückgängig gemacht werden
- Fehler sind Lernchancen, keine Misserfolge

### 4. Selbstständigkeit

Kinder lernen, **sich selbst zu helfen**:
- Dokumentation lesen
- Probleme googeln
- Fragen strukturiert stellen
- Issues erstellen

### 5. Echte Tools = Echtes Lernen

Keine "Spielzeug-Tools":
- Gleiche Werkzeuge wie professionelle Entwickler
- Übertragbare Fähigkeiten
- Vorbereitung auf echte Entwicklung

### 6. Individuelles Tempo

Jedes Kind ist anders:
- Keine festen Zeitpläne
- Kein Vergleich mit anderen
- Eigene Projekte und Interessen

## Gängige Fehler vermeiden

Diese Fehler können den Kurserfolg massiv gefährden. Lerne aus unseren Erfahrungen:

### ❌ FEHLER #1: Windows-Computer zulassen

**Das ist der größte Fehler überhaupt.**

**Warum Windows ein Problem ist:**
- **Ewiger Schmerz** - unzählige Kompatibilitätsprobleme
- **Bindet zu viel Kapazität** - irgendwann kommt man nicht mehr klar
- WSL ist eine Krücke, kein echter Linux
- Unterschiedliche Pfade, Berechtigungen, Zeilenenden
- Ständig andere Fehlermeldungen als bei Linux/macOS
- Die Zeit, die du mit Windows-Problemen verbringst, fehlt für echten Unterricht

**Die Lösung:**
- **Nur Linux oder macOS** im Kurs zulassen
- Am besten: **Alle Kinder bekommen gleiche Hardware** (z.B. Raspberry Pi 500+)
- Falls ein Kind nur Windows-PC hat: **Lieber warten** bis Linux-Lösung gefunden ist

**Konkrete Regel:**
> "Teilnahme am Kurs erfordert Linux oder macOS. Windows (auch mit WSL) ist nicht zugelassen."

**Warum das nicht hart, sondern notwendig ist:**
- Ein einziger Windows-Nutzer kann 50% deiner Support-Zeit binden
- Die anderen Kinder leiden darunter
- Du verbrennst dich selbst

### ❌ FEHLER #2: Keinen Admin-Zugang haben

**Du MUSST Administrator-Zugang auf allen Computern haben.**

**Warum das essentiell ist:**
- Software-Installation (VS Code, Git, Typst, Node.js)
- Entwicklungsumgebung aufsetzen
- Probleme schnell lösen
- Berechtigungen richtig setzen
- System-Updates durchführen

**Wie das umsetzen:**
- Bei Onboarding: Admin-Account für dich einrichten lassen
- Fernzugriff konfigurieren (z.B. SSH, TeamViewer, AnyDesk)
- Eltern müssen dem zustimmen
- Dokumentiere die Zugangsdaten sicher

**Falls Eltern zögern:**
- Erkläre, dass du sonst nicht effektiv helfen kannst
- Betone, dass du verantwortungsvoll damit umgehst
- Zeige, wie viel Zeit das allen spart

### ❌ FEHLER #3: Unterschiedliche Betriebssysteme mischen

**Je mehr Vielfalt, desto schwerer die Betreuung.**

**Das Problem:**
- macOS: `cmd + C` zum Kopieren
- Linux: `ctrl + C` zum Kopieren
- Unterschiedliche Paketmanager (apt, brew, dnf)
- Unterschiedliche Pfad-Konventionen
- Unterschiedliche Standardprogramme

**Die bessere Lösung:**
- **Alle mit gleicher Linux-Distribution** (z.B. Ubuntu, Raspberry Pi OS)
- Einheitliche Anleitung für alle
- Einheitliche Fehlerbehebung
- Kinder können sich gegenseitig helfen

**Wenn du macOS-Nutzer hast:**
- Akzeptabel, aber mach separate Anleitungen
- Dokumentiere die Unterschiede klar
- Setze Grenzen: Linux + macOS ok, aber kein Windows

### ❌ FEHLER #4: Zu schnell zu viele Tools einführen

**Überforderung garantiert.**

**Gängiger Fehler:**
- Woche 1: Git, VS Code, Terminal, Typst, GitHub, SSH-Keys
- Kinder sind komplett überfordert
- Viele geben auf

**Besser:**
- **Woche 1-2:** Nur VS Code + ein erstes Mini-Projekt (ohne Git!)
- **Woche 3-4:** Git einführen (nur add, commit, push)
- **Woche 5+:** Typst richtig nutzen
- **Später:** Branches, Pull Requests, etc.

### ❌ FEHLER #5: Keine Standardisierung

**Jedes Kind mit anderer Setup bedeutet Chaos.**

**Was standardisieren:**
- Betriebssystem (z.B. alle Ubuntu 24.04)
- Hardware (z.B. alle Raspberry Pi 500+)
- Editor (alle VS Code mit gleichen Extensions)
- Ordnerstruktur (`~/coding-class/` für alle)
- Git-Konfiguration (gleiche Einstellungen)

**Warum das wichtig ist:**
- Anleitungen funktionieren für alle gleich
- Screenshots sind universell nutzbar
- Kinder können sich gegenseitig helfen
- Fehlersuche ist einfacher

### ❌ FEHLER #6: Eltern nicht einbeziehen

**Kinder brauchen zu Hause Unterstützung.**

**Was Eltern wissen müssen:**
- Warum Linux/macOS notwendig ist
- Warum Admin-Zugang wichtig ist
- Wie der Kurs funktioniert (asynchron, eigenes Tempo)
- Wo sie Fragen stellen können

**Wie Eltern helfen können:**
- Technischen Zugang ermöglichen
- Lernzeit zu Hause ermöglichen
- Interesse an Projekten zeigen
- Bei Hardware-Problemen unterstützen

### ❌ FEHLER #7: Alternative "einfachere" Tools verfügbar lassen

**Das tötet die Motivation komplett.**

**Das Problem:**
Du versuchst, einem Kind Typst beizubringen, aber auf dem gleichen Computer ist **Microsoft Word installiert**.

**Was passiert:**
- Kind: "Warum soll ich Code schreiben? Mit Word geht das viel schneller!"
- Kind nimmt den gefühlt einfacheren Weg
- Typst wird als "kompliziert und unnötig" empfunden
- Motivation sinkt gegen Null
- Kind lernt nichts

**Konkrete Beispiele:**
- ❌ Word/LibreOffice auf dem System → Kind nutzt nicht Typst
- ❌ Scratch installiert → Kind macht lieber Scratch statt React
- ❌ Notion/Google Docs → Kind schreibt nicht in Markdown
- ❌ Visual Block Editors → Kind lernt keinen echten Code

**Die Lösung:**
Eltern müssen **aktiv kooperieren** und diese Programme **vorenthalten**:

1. **Word/LibreOffice:** NICHT installieren oder deinstallieren
2. **Visuelle Tools:** Scratch, Blockly, etc. entfernen
3. **Cloud-Alternativen:** Google Docs, Notion für Kursprojekte nicht erlauben
4. **Klare Regel:** "Für Schulaufgaben kannst du Word nutzen, aber für Coding-Kurs nur Typst"

**Warum das funktioniert:**
- Kein "einfacher Ausweg" verfügbar
- Kind muss sich mit Typst auseinandersetzen
- Nach kurzer Zeit wird Typst zur Gewohnheit
- Kind entdeckt die Vorteile von Code-basierter Dokumenterstellung

**Kommunikation mit Eltern:**
> "Bitte stellen Sie sicher, dass auf dem Computer, den Ihr Kind für den Kurs nutzt, **keine Textverarbeitungs-Software** wie Word oder LibreOffice installiert ist. Das ist essentiell, damit Ihr Kind die Motivation behält, Typst zu lernen. Für Schulaufgaben kann ein separates System genutzt werden."

**Wichtig:** Das ist KEINE Schikane, sondern **pädagogisch notwendig**:
- Wie beim Sprachenlernen: Nur Englisch sprechen, um Englisch zu lernen
- Kein "zurück zur Muttersprache" erlauben
- Erst wenn Typst zur Gewohnheit wurde, können Alternativen wieder verfügbar sein

## Empfohlene technische Setup-Strategie

### Option A: Alle gleich (IDEAL)

**Hardware:** Alle Kinder bekommen Raspberry Pi 500+ (~200 EUR)
**Vorteil:**
- Komplett identisches Setup
- Einheitliche Problemlösung
- Faire Bedingungen für alle
- Kinder können Hardware mit nach Hause nehmen

### Option B: Linux-only gemischt (OKAY)

**Hardware:** Verschiedene Linux-Computer (eigene Laptops, etc.)
**Bedingung:** Nur Ubuntu oder Debian-basierte Distributionen
**Vorteil:**
- Keine zusätzlichen Kosten
- Nutzt vorhandene Hardware
**Nachteil:**
- Unterschiede in Hardware und Konfiguration
- Mehr Support-Aufwand

### Option C: Linux + macOS (AKZEPTABEL)

**Hardware:** Linux-Computer und MacBooks gemischt
**Bedingung:** Dokumentiere beide Welten separat
**Vorteil:**
- Nutzt vorhandene teure Hardware (MacBooks)
**Nachteil:**
- Zwei parallele Anleitungen nötig
- Mehr Komplexität

### Option D: Mit Windows-WSL (NICHT EMPFOHLEN)

**Hardware:** Windows mit WSL 2
**Bedingung:** Nur als absolute letzte Option
**Problem:**
- Bindet massive Support-Ressourcen
- Ständig andere Probleme als Linux/macOS
- Frustrierend für alle Beteiligten
**Alternative:** Besser warten, bis Linux-Lösung vorhanden ist

## Verbesserungen und offene Fragen

**Der Setup-Prozess ist aktuell noch mühsam, aber lohnenswert.**

### Was funktioniert bereits gut:
- Raspberry Pi 500+ als standardisierte Hardware
- Admin-Zugang für schnelle Problemlösung
- Fernwartung über SSH/TeamViewer

### Was noch verbessert werden kann:
- **Virtuelle Maschinen:** Könnte für Windows-Nutzer eine Alternative sein?
  - VM mit vorinstalliertem Linux
  - Export/Import für einfache Verteilung
  - Problem: Performance, Komplexität

- **Docker-Container:** Entwicklungsumgebung als Container?
  - Portabel und reproduzierbar
  - Problem: Zu abstrakt für Kinder?

- **Cloud-basierte Entwicklung:** VS Code im Browser?
  - GitHub Codespaces, Gitpod
  - Problem: Kosten, Internetabhängigkeit

**Wir sind offen für Vorschläge!** Wenn du Erfahrungen mit besseren Setup-Strategien hast, teile sie bitte in den GitHub Discussions.

## Häufige Bedenken

### "Ist Git nicht zu kompliziert für Kinder?"

**Antwort:** Nein, wenn man es richtig einführt.

Kinder lernen am Anfang nur:
```bash
git add .
git commit -m "Nachricht"
git push
```

Das ist nicht komplizierter als andere Tools. Wichtig:
- Langsam einführen
- Praktisch zeigen, nicht theoretisch erklären
- Fehler sind okay

### "Warum nicht erst Scratch, dann echter Code?"

**Antwort:** Weil das doppelte Arbeit ist.

Die "Scratch-Falle":
- Jahre mit visuellen Tools
- Dann frustrierender Neustart mit echtem Code
- Viele geben auf

Unser Ansatz:
- Einmal richtig lernen
- Alles ist übertragbar
- Kontinuierlicher Fortschritt

### "Ist das nicht zu schwer für Kinder?"

**Antwort:** Nein, aber es erfordert Geduld.

Die Lernkurve ist anfangs steiler, aber:
- Kinder sind erstaunlich lernfähig
- Mit der richtigen Unterstützung schaffen sie es
- Der langfristige Nutzen ist viel größer

### "Was ist mit Kindern, die langsam lernen?"

**Antwort:** Der Kurs passt sich an.

- Kein Zeitdruck
- Kein Leistungsvergleich
- Individuelles Tempo
- Auch langsame Lerner profitieren

## Kontakt und Austausch

Möchtest du einen ähnlichen Kurs aufsetzen? Hast du Fragen oder Anregungen?

**GitHub-Organisation:**
- [levins-coding-class auf GitHub](https://github.com/orgs/levins-coding-class) - Alle Projekte und Materialien

**Öffentliches Diskussionsforum:**
- [Diskussionen starten](https://github.com/levins-coding-class/website/discussions)
- Fragen stellen
- Erfahrungen teilen

**Dieses Repository nutzen:**
- Alle Materialien sind frei verfügbar
- Fork das Repository
- Pass es an deine Bedürfnisse an
- Trage Verbesserungen bei (Pull Requests willkommen!)

---

**Viel Erfolg beim Aufsetzen deines eigenen Kurses! Gemeinsam machen wir Programmieren für Kinder zugänglich. 🚀**

[^1]: Eine flache Lernkurve ergibt sich, wenn man trotz hohem Arbeitsaufwand wenig Fortschritt macht, die Komplexität der Aufgabe also hoch ist. Die Steigung der Lernkurve ist also gering und die Kurve sieht "flach" aus. Die wenigsten Leute verstehen das und meistens wird "steile Lernkurve" für schwierig zu lernenden Inhalte verwendet, was logisch keinen Sinn macht.
