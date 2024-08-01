<template>
  <main ref="main" class="h-full py-12 p-4 bg-no-repeat bg-top preload">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img src="../assets/images/1password-primary-logo.svg" alt="1Password primary logo" class="mx-auto h-12 w-auto">
    </div>

    <table class="table-auto w-full border-separate border-spacing-y-2.5">
      <thead>
        <tr>
          <th class="border-b border-cloud py-2 font-light text-left text-cloud uppercase pl-32">Username</th>
          <th class="border-b border-cloud py-2 font-light text-right text-cloud pr-16 uppercase">Score</th>
        </tr>
      </thead>
    </table>

    <transition-group name="leaderboard" tag="ol" class="space-y-2" :css="false" @before-enter="onBeforeEnter"
      @enter="onEnter">
      <leaderboard-entry v-for="(entry, index) in store.allTimeEntries" :key="entry.id" :rank="index + 1"
        :time-entry="entry" />
    </transition-group>
  </main>

</template>

<script setup>
import { onMounted, ref } from 'vue';
// import { gsap } from 'gsap';

import LeaderboardEntry from '@/components/LeaderboardEntry.vue';
import { useTimeEntriesStore } from '@/stores/time_entries';

const main = ref(null);
const store = useTimeEntriesStore();

onMounted(() => {
  main.value.classList.remove('preload');
});

/* eslint-disable no-param-reassign */
function onBeforeEnter() {
  // el.classList.add('z-100');
  // el.style.transform = 'translateY(100vh)';
}
/* eslint-enable no-param-reassign */

function onEnter() {
  // gsap.to(el, {
  //     duration: 3,
  //   ease: 'power1.in',
  // onComplete: done,
  // y: 0,
  // });
}
</script>

<style>
.preload * {
  transition: none !important;
}

.leaderboard-move,
.leaderboard-enter-active,
.leaderboard-leave-active {
  transition: all 0.5s ease;
}

.leaderboard-enter-from {
  opacity: 0;
  top: 100%;
}
</style>
