<template>
  <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img src="../assets/images/1password-logo-primary.png" alt="1Password primary logo" class="mx-auto h-10 w-auto">
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-4xl">
      <div class="bg-cloud py-12 px-6 shadow sm:rounded-lg sm:px-12">
        <form action="" class="space-y-6">
          <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="first_name" class="block text-sm-font-medium leading-6 text-iron-ore">First name</label>

              <div class="mt-2">
                <input v-model="timeEntry.first_name" type="text" id="first_name" name="first_name"
                  class="block w-full rounded-md border-0 p-1.5 text-iron-ore shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bits-blue sm:text-sm sm:leading-6">
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="last_name" class="block text-sm-font-medium leading-6 text-iron-ore">Last name</label>

              <div class="mt-2">
                <input v-model="timeEntry.last_name" type="text" id="last_name" name="last_name"
                  class="block w-full rounded-md border-0 p-1.5 text-iron-ore shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bits-blue sm:text-sm sm:leading-6">
              </div>
            </div>
          </div>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-6">
              <label for="email" class="block text-sm-font-medium leading-6 text-iron-ore">Email address</label>

              <div class="mt-2">
                <input v-model="timeEntry.id" type="email" id="email" name="email"
                  class="block w-full rounded-md border-0 p-1.5 text-iron-ore shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bits-blue sm:text-sm sm:leading-6">
              </div>
            </div>
          </div>

          <div class="mt-10 flex items-center">
            <div class="w-28">
              <label for="minutes" class="block text-sm-font-medium leading-6 text-iron-ore">Minutes</label>

              <div class="mt-2">
                <input v-model="timeEntry.minutes" type="number" id="minutes" name="minutes" inputmode="numeric" min="0"
                  pattern="[-+]?[0-9]*[.,]?[0-9]+"
                  class="block w-full rounded-md border-0 p-1.5 text-iron-ore shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bits-blue sm:text-sm sm:leading-6"
                  @blur="validateMinutes">
              </div>
            </div>

            <div class="mb-2 mx-3 self-end">:</div>

            <div class="w-28">
              <label for="seconds" class="block text-sm-font-medium leading-6 text-iron-ore">Seconds</label>

              <div class="mt-2">
                <input v-model="timeEntry.seconds" type="number" id="seconds" name="seconds" inputmode="numeric"
                  max="59" min="0" pattern="[-+]?[0-9]*[.,]?[0-9]+"
                  class="block w-full rounded-md border-0 p-1.5 text-iron-ore shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bits-blue sm:text-sm sm:leading-6"
                  @blur="validateSeconds">
              </div>
            </div>
          </div>

          <div class="!mt-12">
            <button
              class="flex w-full justify-center rounded-md bg-intrepid-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-mid-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mid-blue"
              @click.prevent="addTimeEntry">
              Create entry
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useTimeEntriesStore } from '@/stores/time_entries';

const store = useTimeEntriesStore();

const timeEntrySchema = {
  id: '',
  first_name: '',
  last_name: '',
  minutes: '',
  seconds: '',
};

const timeEntry = ref({ ...timeEntrySchema });

const time = computed(() => `${timeEntry.value.minutes}:${timeEntry.value.seconds}`);

function addTimeEntry() {
  store.addTimeEntry({ ...timeEntry.value, time: time.value }).then(() => {
    timeEntry.value = { ...timeEntrySchema };
  });
}

function validateMinutes() {
  const minutes = Math.max(timeEntry.value.minutes, 0);

  timeEntry.value.minutes = minutes.toLocaleString('en-US', { minimumIntegerDigits: 2 });
}

function validateSeconds() {
  const seconds = Math.min(timeEntry.value.seconds, 59);

  timeEntry.value.seconds = seconds.toLocaleString('en-US', { minimumIntegerDigits: 2 });
}
</script>
