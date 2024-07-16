<template>
  <v-app-bar app :elevation="2" class="px-2">
    <div>
      <v-btn color="button" to="/">
        {{ $t("navbar.homeButton") }}
      </v-btn>
      <v-btn color="button" to="/about">
        {{ $t("navbar.aboutButton") }}
      </v-btn>
      <v-btn color="button" to="/playground">
        {{ $t("navbar.playgroundButton") }}
      </v-btn>
      <v-btn color="button" to="/blog">
        {{ $t("navbar.blogButton") }}
      </v-btn>
    </div>
    <v-spacer />
    <div class="mr-4 mt-6">
      <SelectLocale />
    </div>
  </v-app-bar>
</template>
