<script lang="ts" setup>
import type { GetPostsQueryVariables } from "#gql";
import type { PostItem, Locale } from "../types/types";

const { locale } = useI18n();
const posts = ref<PostItem[]>([]);
const isLoading = ref(false);
const isError = ref(false);

const fetchPosts = async (localeValue: Locale) => {
  try {
    isLoading.value = true;
    const variables: GetPostsQueryVariables = {
      locale: [localeValue],
    };
    const data = await GqlGetPosts(variables);
    posts.value = data?.localizedPosts ?? [];
  } catch (err) {
    console.log("Fetch Error, Something went wrong", err);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
};

// Fetch posts on component mount
onMounted(() => {
  fetchPosts(locale.value as Locale);
});

// Watch for locale changes
watch(locale, (newLocale) => {
  fetchPosts(newLocale as Locale);
});
</script>

<template>
  <v-container fluid>
    <v-card-title class="text-overline">Blogs</v-card-title>
    <div v-if="isLoading">
      <v-skeleton-loader type="card" v-for="n in 2" :key="n" class="mb-4" />
    </div>
    <div v-else-if="isError">
      <p>Something went wrong while getting blogs please check the logs.</p>
    </div>
    <div v-else>
      <div
        v-for="(post, index) in posts"
        :key="post.title || index"
        class="mb-4"
      >
        <v-card color="cardBackground">
          <v-card-title class="text-h6">{{ post.title }}</v-card-title>
          <v-card-text>{{ post.body }}</v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>
