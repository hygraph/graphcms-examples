<script setup>
const { locale, locales, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => setLocale(value),
});
</script>

<template>
  <v-select
    :label="$t('selectLocale.label')"
    variant="outlined"
    color="primary"
    density="compact"    
    :items="locales"
    item-title="name"
    item-value="code"
    v-model="language"
  ></v-select>
</template>
