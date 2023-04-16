<template>
    <div>

        <main class="">

            <section class="grid grid-cols-1 lg:grid-cols-3 gap-x-10">

                <div class="col-span-2">
                    <h1>
                        <span class="text-primary">fischer</span>Finder
                    </h1>

                    <p>
                        Der fischerFinder ist ein ChatBot, der es Kunden erleichtert, das richtige Befestigungsprodukt
                        für ihren individuellen Anwendungsfall zu finden. Dabei kann der ChatBot sowohl über WhatsApp
                        als auch über andere Messenger-Dienste wie Telegram genutzt werden. Ebenfalls ist eine
                        Integration in die Kunden-Hotline möglich, um Mitarbeiter zu entlasten.
                    </p>

                    <p>
                        Unsere Idee kombiniert
                    </p>

                    <ul class="mb-2">
                        <li>modernste <strong>Künstliche Intelligenz</strong>, um Eingaben des Kunden sowohl in Text-,
                            Bild- als auch Audioform in klare Merkmale umzuwandeln,
                        </li>
                        <li>einen bereits in Teilen vorhandenen <strong>Entscheidungsbaum</strong> aktualisiert mit der
                            fischer Produkt-API
                        </li>
                        <li>und einen <strong>bereits</strong> vom Kunden <strong>genutzten Messenger-Dienst</strong>,
                            um zusätzliche App-Installationen zu vermeiden.
                        </li>
                    </ul>

                    <blockquote class="my-6 border-grey border-2 p-4 italic">
                        "Wir sind Ayka, Benedikt und Christian. Gemeinsam bringen wir <strong>KI-Expertise</strong>
                        sowie Erfahrung in der <strong>App- und Web-Entwicklung</strong> mit und freuen uns darauf,
                        gemeinsam mit euch den <strong>Kundenservice von fischer auf das nächste Level</strong> zu
                        bringen."
                    </blockquote>
                </div>

                <div class="col-span-1">
                    <Smartphone />
                </div>

            </section>

            <section>

                <h2>Optimaler Userflow</h2>

                <p>
                    Ein Heimwerker möchte ein Bild an seiner Wand aufhängen. Er kennt sich jedoch nicht mit Dübeln aus
                    und weiß auch nicht, aus welchem Material seine Wand besteht. Hier kommt fischerFinder ins Spiel:
                    Der Kunde kann seine Frage nach dem richtigen Dübel ganz einfach per <strong>WhatsApp</strong> als
                    <strong>Text-, Audio- oder Bild-Nachricht</strong> an fischerFinde senden.
                </p>

                <p>
                    fischerFinder fragt nach weiteren Einzelheiten zum befestigenden Objekt oder bittet den Kunden, z.B.
                    ein Loch in die Wand zu bohren, um <strong>anhand des Staubes das Material der Wand
                                                               herauszufinden</strong>. Der ChatBot ist darauf
                    trainiert, alle wichtigen Informationen wie Wandbeschaffenheit, Gewicht etc. aus den Nachrichten des
                    Kunden zu sammeln und gegebenenfalls nachzuhaken, um dann eine auf den konkreten Anwendungsfall
                    angepasste Empfehlung zu geben. Der Chatbot nimmt die Kundenbedürfnisse auf und kann sie auch für
                    zukünftige Interaktionen nutzen und gewährleistet so ein optimales Kundenerlebnis.
                </p>

                <p>
                    Wenn der ChatBot einmal nicht erfolgreich sein sollte oder der Nutzer weitere Unterstützung
                    benötigt, kann der Chat direkt an einen Support-Mitarbeiter weitergegeben werden. Dieser erhält den
                    Chatverlauf und eine Zusammenfassung der bisher von der KI ausgewerteten Daten.
                </p>

            </section>

            <section>

                <h2>Konkrete Umsetzung</h2>

                <ol>
                    <li>
                        Der Nutzer schreibt unseren WhatsApp ChatBot an. Im Hintergrund kommunieirt unser Server mit der
                        <a href="https://developers.facebook.com/docs/whatsapp/cloud-api/"
                           target="_blank"> <strong>Cloud API der WhatsApp Business Platform</strong></a>.
                    </li>
                    <li>
                        Der Server verarbeitet Bilder mit Hilfe von <a
                            href="https://www.tensorflow.org/" target="_blank"><strong>TensorFlow</strong></a> und
                        Audionachrichten mit Hilfe von <a
                            href="https://github.com/kaldi-asr/kaldi"
                            target="_blank"><strong>Kaldi</strong></a> zu Text.
                    </li>
                    <li>Dieser Text, als auch Textnachrichten, die direkt vom Nutzer kommen, werden im Anschluss mihilfe
                        von TensorFlow zu <strong>konkreten Produktmerkmalen</strong> verarbeitet.
                    </li>
                    <li>
                        Mithilfe der konkreten Produktmerkmalen wird dann versucht ein Produkt in der aktuellen bzw.
                        später optimierten <strong>Fischer-API</strong> (s. Optimierung bestehender Daten) / <strong>Decision
                                                                                                                     Tree</strong>.
                    </li>
                    <li>
                        Ist diese Suche erfolgreich, wird das <strong>Produkt an den Nutzer gesendet</strong>. Sollten
                        zum Finden eines passenden Produkts noch weitere Informationen fehlen, so wird der ChatBot
                        gezielt nach weiteren Einzelheiten beim Nutzer nachfragen.
                    </li>
                </ol>

                <figure>
                    <img src="~/assets/img/fischerFinder_Modell.png" alt="Aufbau des fischerFinders">
                </figure>

            </section>

            <section>

                <h2>Machbarkeitsanalyse</h2>

                <p>
                    Um die Machbarkeit unserer Idee zu testen, haben wir einen <strong>Prototyp eines WhatsApp ChatBots
                                                                                       entwickelt</strong> entwickelt,
                    der das beschriebene Backend nutzen kann und dann anhand der Daten, die der Nutzer eingibt, konkrete
                    Produkt-Empfehlungen geben kann.
                </p>

                <p>
                    Zudem haben wir uns konkret das <strong>Training der Bildanalyse-KI</strong> angeschaut (s. <a
                        href="#oberflaechenAnalyse">Oberflächen Bildanalyse</a>). Auch haben wird die aktuelle Fischer
                    API-Daten analysiert, um sie optimal für den ChatBot und den Entscheidung Baum nutzen zu können und
                    diese effizient zu gestalten, sollten einige Optimierungen vorgenommen werden. (s. <a
                        href="#optimierungBestehenderDaten">Optimierung bestehender Daten</a>)
                </p>

            </section>

            <section>

                <h2>Vorteile für Fischer und seine Kunden</h2>

                <p>
                    Unser Ansatz bietet <strong>zahlreiche Vorteile</strong> für Fischer und seine Kunden. Kunden
                    erhalten eine <strong>schnelle und genaue Empfehlung für das richtige Produkt</strong>, was die
                    Entscheidungsfindung erleichtert und die <strong>Kundenzufriedenheit erhöht</strong>. Fischer kann
                    von einer gesteigerten Kundenbindung und -zufriedenheit profitieren, was sich langfristig positiv
                    auf das Geschäft auswirkt.
                </p>

                <p>
                    Der ChatBot kann in den Telefon-Support oder ein bestehendes Webinterface eingebunden werden und
                    natürlich auch auf alle weiteren Messenger, wie Telegram, Threema etc. erweitert werden werden.
                </p>

            </section>

            <section>

                <h2 id="oberflaechenAnalyse">Oberflächen-Bildanalyse</h2>

                <p>
                    Die Erkennung von Wandmaterialien anhand von Bildern ist eine anspruchsvolle Aufgabe, da Materialien
                    wie Holz, Beton oder Gipskarton unterschiedliche Texturen und Erscheinungsbilder haben können. Um
                    diese Herausforderung zu bewältigen, haben wir uns für eine Deep Learning-basierte Bildanalyse
                    entschieden. Für diese kann wie folgt vorgegangen werden.
                </p>

                <section>

                    <h3>
                        Datensammlung und -kategorisierung
                    </h3>

                    <p>
                        Zunächst haben wir Bilder von verschiedenen Wandmaterialien gesammelt und diese entsprechend
                        kategorisiert. Dazu haben wir sowohl öffentlich verfügbare Bilddatenbanken wie CUReT und GeoMat
                        genutzt, als auch auf von Fischer bereitgestellte Bilder aus der Fischer Pro App
                        zurückgegriffen.
                    </p>

                    <figure>
                        <img src="~/assets/img/curet_dataset.png" alt="CUReT dataset" class="max-w-md" />
                        <figcaption>
                            CUReT dataset - erste groß angelegte Textur-/Materialdatensatz, Bereitstellung von 61
                            Materialkategorien, fotografiert in 205 Betrachtungs- und Lichtverhältnisse. <br> (<a
                                href="https://www.cs.columbia.edu/CAVE/software/curet/html/sample.html" target="_blank">Quelle</a>)
                        </figcaption>
                    </figure>

                    <figure>
                        <img src="~/assets/img/geomat_dataset.png" alt="GeoMat Dataset">
                        <figcaption>
                            GeoMat Dataset - 19 verschiedene Materialkategorien
                        </figcaption>
                    </figure>

                    <figure>
                        <img src="~/assets/img/fischer_pro.png" alt="Fischer PRO Dataset">
                        <figcaption>
                            Fischer Pro App hat diese gelabelten Oberflächenbilder. Darauf basierend können wir eine
                            Datenbank erstellen. Sie können als Grundlage dienen.
                        </figcaption>
                    </figure>

                </section>

                <section>

                    <h3>
                        Deep Learning Framework und Modell
                    </h3>

                    <p>
                        Für die Implementierung des Deep Learning-Ansatzes haben wir das Keras-Framework verwendet, das
                        auf TensorFlow aufbaut. Mit Keras konnten wir ein Convolutional Neural Network (CNN) erstellen,
                        das für die Aufgabe der Materialerkennung optimiert ist.
                    </p>

                    <p>
                        Das CNN extrahiert Merkmale aus den Bildern und lernt, diese verschiedenen Materialkategorien
                        zuzuordnen. Durch das Trainieren des Modells mit unserer Bildsammlung erreichen wir eine hohe
                        Genauigkeit bei der Erkennung von Wandmaterialien in von Kunden bereitgestellten Bildern.
                    </p>

                </section>

                <section>

                    <h3>
                        Integration in den ChatBot
                    </h3>

                    <p>
                        Sobald das CNN-Modell trainiert ist, integrieren wir es in den fischerFinder ChatBot. Dadurch
                        kann der ChatBot die von Kunden über WhatsApp gesendeten Bilder analysieren und die
                        Wandmaterialien automatisch erkennen. Diese Information wird dann verwendet, um eine gezielte
                        Produkt Empfehlung auszusprechen.
                    </p>

                </section>

                <section>

                    <h3>
                        Zukünftige Verbesserungen
                    </h3>

                    <p>
                        Um die Leistungsfähigkeit der Bildanalyse weiter zu verbessern, planen wir, das Modell <strong>kontinuierlich</strong>
                        mit <strong>neuen Bilddaten</strong> zu trainieren und die <strong>Kategorisierung der
                                                                                           Materialien weiter zu
                                                                                           verfeinern</strong>. Außerdem
                        wollen wir die Integration von fortschrittlichen Deep Learning-Technologien wie GANs (Generative
                        Adversarial Networks) erforschen, um die Robustheit und Genauigkeit unseres Systems weiter zu
                        erhöhen.
                    </p>

                    <p>
                        Zusammenfassend bietet unsere Bildanalyse-Lösung eine <strong>effektive Möglichkeit</strong>,
                        Wandmaterialien auf Basis von Kundenfotos zu identifizieren und somit eine gezielte Produkt
                        Empfehlung abzugeben. Durch die Integration dieser Technologie in den fischerFinder ChatBot
                        können wir den <strong>Kundenservice von Fischer deutlich verbessern</strong> und das
                        Kundenerlebnis optimieren.
                    </p>

                </section>

            </section>

            <section>

                <h2 id="optimierungBestehenderDaten">
                    Optimierung bestehender Daten
                </h2>

                <ul>
                    <li>
                        <strong>Klare Hierarchie</strong>: Organisieren Sie die Daten in einer klaren hierarchischen
                                                         Struktur. Hierbei sollten Sie Hauptkategorien, Unterkategorien
                                                         und zugehörige Attribute definieren.
                    </li>
                    <li>
                        <strong>Konsistente Daten</strong>: Stellen Sie sicher, dass die verwendeten Bezeichnungen und
                                                          Einheiten in den gesamten Daten konsistent sind. Dies
                                                          erleichtert der KI das Verständnis und die Verarbeitung der
                                                          Daten.
                    </li>
                    <li>
                        <strong>Entfernen von HTML-Tags</strong>: Entfernen Sie HTML-Tags aus den Textdaten, um die
                                                                Informationen für die KI leichter lesbar und
                                                                verständlich zu machen.
                    </li>
                    <li>
                        <strong>Bereinigung von Daten</strong>: Entfernen Sie doppelte oder unnötige Informationen, um
                                                              die Datenmenge zu reduzieren und die
                                                              Verarbeitungsgeschwindigkeit für die KI zu erhöhen
                    </li>
                    <li>
                        <strong>Metadaten</strong>: Fügen Sie Metadaten hinzu, um zusätzliche Informationen über die
                                                  Daten bereitzustellen. Dies kann der KI helfen, den Kontext und die
                                                  Bedeutung der Daten besser zu verstehen.
                    </li>
                    <li>
                        <strong>Zusammenfassung</strong>: Fügen Sie eine kurze Zusammenfassung oder Beschreibung jeder
                                                        Dateneinheit hinzu, um der KI einen schnellen Überblick über die
                                                        wichtigsten Informationen zu ermöglichen.
                    </li>
                </ul>

            </section>

            <section>

                <h2>
                    PainPoints die wir lösen
                </h2>

                <p>
                    Unsere Lösung adressiert die Herausforderungen, die Kunden bei der <strong>Auswahl des richtigen
                                                                                               Befestigungsprodukts</strong>
                    haben, indem sie <strong>gezielte und persönliche Empfehlungen</strong> basierend auf individuellen
                    Bedürfnissen bietet. Dies erleichtert die Entscheidungsfindung und erhöht die Zufriedenheit mit
                    Fischer-Produkten. Insbesondere <strong>Heimwerker</strong> mit wenig technischen Kenntnissen
                    profitieren von unserer effektiven, kostengünstigen und benutzerfreundlichen Lösung.
                </p>

            </section>

            <section>

                <h2>
                    Zusammenfassung und Ausblick
                </h2>

                <p>
                    Wir sind überzeugt, dass unser Ansatz einen <strong>bedeutenden Mehrwert</strong> für Fischer und
                    seine Kunden bietet. Gerade Heimwerkern, die wenig technische Kenntnisse haben, kann so effektiv,
                    kostengünstig und auf eine benutzerfreundliche Art und Weise geholfen werden. Wir freuen uns darauf,
                    Ihnen unsere Idee vorzustellen, sie im Detail mit Ihnen zu diskutieren und Ihnen zu zeigen, wie wir
                    die Lösung implementieren können, um das Kundenerlebnis von Fischer zu verbessern und das Geschäft
                    voranzutreiben.
                </p>

            </section>

        </main>

    </div>
</template>
<script setup lang="ts">
</script>
