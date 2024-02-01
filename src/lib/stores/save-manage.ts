import dayjs from 'dayjs';
import { writable } from 'svelte/store';
import localforage from 'localforage';
import { t as $t } from 'svelte-i18n';

export const fromRemote = writable(false);
export const CONVERTED_KEY = 'converted';

let t;
$t.subscribe((f) => (t = f));

const convertTime = (data) => {
    for (const pull of data.pulls) {
      pull.time = dayjs.unix(pull.time).format('YYYY-MM-DD HH:mm:ss');
    }
  
    return data;
};

const convertSave = async () => {
    const lfkeys = await localforage.keys();
    for (const key of lfkeys) {
      if (key.includes('backup')) {
        await localforage.removeItem(key);
    }
}

const converted = localStorage.getItem(CONVERTED_KEY);
  if (converted !== null) return;

  let convertedCount = 0;
  for (const [key, value] of Object.entries(localStorage)) {
    if (key.endsWith('ar') || key.endsWith('wl')) {
      await localforage.setItem(key, Number(value));
    } else if (key.endsWith('collectables-updated')) {
      await localforage.setItem(key, value === 'true');
    } else if (
      key.endsWith('accounts') ||
      key.endsWith('locale') ||
      key.endsWith('server') ||
      key.endsWith('update-time')
    ) {
      await localforage.setItem(key, value);
    } else if (
      key.endsWith('wish-counter-character-event') ||
      key.endsWith('wish-counter-weapon-event') ||
      key.endsWith('wish-counter-standard') ||
      key.endsWith('wish-counter-beginners')
    ) {
      const converted = convertTime(JSON.parse(value));
      await localforage.setItem(key, converted);
    } else {
      try {
        await localforage.setItem(key, JSON.parse(value));
      } catch (err) {
        await localforage.setItem(key, value);
      }
    }

    if (!key.endsWith('locale')) {
      convertedCount++;
    }
  }

  const convertedTime = dayjs().toISOString();
  localStorage.setItem(CONVERTED_KEY, convertedTime);
  await localforage.setItem(CONVERTED_KEY, convertedTime);

  if (convertedCount > 0) {
    window.location.reload();
  }
};

export const getLocalSaveJson = async () => {
    const data = {};
    await localforage.iterate((value, key) => {
      data[key] = value;
    });
    return JSON.stringify(data);
};

export const readSave = async (key) => {
    const data = await localforage.getItem(key);
    return data;
};