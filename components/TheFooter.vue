<template>
    <footer class="mt-auto">
        <div class="bg-grey">
            <div class="container py-10">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
                    <div class="flex flex-col gap-5">
                        <div>
                            <strong>Kontakt</strong>
                        </div>

                        <div>
                            <ul class="list-none flex flex-col gap-2 pl-0">
                                <li>
                                    <a href="mailto:fischer-finder@qrcheck.app" target="_blank"> Team per E-Mail
                                                                                        kontaktieren </a>
                                </li>

                                <li>
                                    <a href="https://www.linkedin.com/in/bdwebnet/" target="_blank"> Benedikt auf
                                                                                                     LinkedIn </a>
                                </li>

                                <li>
                                    <a href="https://www.linkedin.com/in/ottenhaus/" target="_blank">
                                        Christian auf LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="flex flex-col gap-5">
                        <div>
                            <strong>Weiteres</strong>
                        </div>

                        <div>
                            <ul class="list-none flex flex-col gap-2 pl-0">
                                <li>
                                    <a href="https://github.com/bdwebnet/fischer-finder" target="_blank">GitHub
                                                                                                         (fischerFinder
                                                                                                         Demo-Backend)</a>
                                </li>
                                <li>
                                    <a href="https://github.com/bdwebnet/fischer-finder-infosite" target="_blank">GitHub
                                                                                                                  (Info-Website)</a>
                                </li>
                                <li>
                                    <a href="https://mesh-stuttgart.de/" target="_blank">
                                        Zur Website vom MESH Hackathon
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="flex flex-col gap-5">
                        <div>
                            <strong>Rechtliches</strong>
                        </div>

                        <div>
                            <ul class="list-none flex flex-col gap-2 pl-0">
                                <li>
                                    <NuxtLink to="/about/impressum">Impressum</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/about/datenschutz">Datenschutzerklärung</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/about/lizenzen">Lizenzhinweise</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container py-4 text-sm flex place-content-between flex-wrap gap-3">
            <div>
                Diese Website entstand im Rahmen des <a href="https://mesh-stuttgart.de/" target="_blank">MESH Hackathon
                                                                                                          2023</a> und
                der Challenge von <a href="https://fischer.de/" target="_blank">fischer</a>.
            </div>

            <div>
                &copy; 2023 Ayka, Benedikt, Christian
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
</script>
