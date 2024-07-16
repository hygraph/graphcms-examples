<script setup>
let appleCount = ref(0);
const addApple = () => {
  appleCount.value += 1;
};
</script>

<template>
  <v-container fluid>
    <v-card-title class="text-overline pa-0">
      {{ $t("playgroundPage.title") }}
    </v-card-title>


    <!-- PLURALIZATION EXAMPLE  -->
    <v-card color="cardBackground">
      <v-card-title class="text-overline">
        {{ $t("playgroundPage.pluralization.title") }}
      </v-card-title>

      <v-card-text>
        {{ $t("playgroundPage.pluralization.apple", { count: appleCount }) }}
      </v-card-text>
      <v-card-actions>
        <v-btn
          @click="addApple"
          color="primary"
          variant="outlined"
          density="comfortable"
          >{{ $t("playgroundPage.pluralization.addApple") }}</v-btn
        >
      </v-card-actions>
    </v-card>
    <br /><br />

    <!-- INTERPOLATION EXAMPLE  -->
    <v-card color="cardBackground">
      <v-card-title class="text-overline">
        {{ $t("playgroundPage.interpolation.title") }}
      </v-card-title>
      <v-card-text>
        <p>
          {{
            $t("playgroundPage.interpolation.sayHello", {
              name: "Jane",
            })
          }}
        </p>
        <p>
          {{
            $t("playgroundPage.interpolation.hobby", ["Football", "Cricket"])
          }}
        </p>
        <p>
          {{
            $t("playgroundPage.interpolation.email", {
              account: "johndoe",
              domain: "hygraph",
            })
          }}
        </p>
      </v-card-text>
    </v-card>
    <br /><br />

    <!-- DATE TIME TRANSLATIONS EXAMPLE  -->
    <v-card color="cardBackground">
      <v-card-title class="text-overline">
        {{ $t("playgroundPage.dateTime.title") }}
      </v-card-title>
      <v-card-text>
        <p>Short: {{ (new Date(), $d(new Date(), "short")) }}</p>
        <p>Long: {{ (new Date(), $d(new Date(), "long")) }}</p>
      </v-card-text>
    </v-card>
  </v-container>

</template>

<!-- TRANSLATION EXAMPLE  -->
<!--
const { loadLocaleMessages, t } = useI18n();
await loadLocaleMessages("fr");
const welcome = computed(() => t("playgroundPage.translation.helloWorld"));
const welcomeFR = computed(() =>
  t("playgroundPage.translation.helloWorld", 1, { locale: "fr" })
);
<v-card color="cardBackground">
  <v-card-title class="text-overline">
    {{ $t("playgroundPage.translation.title") }}
  </v-card-title>
  <v-card-text>
    <p>English : {{ welcome }}</p>
    <p>French : {{ welcomeFR }}</p>
  </v-card-text>
</v-card>
<hr /> 
-->