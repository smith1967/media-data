<template>
  <div>
    <h1>Hello Smith</h1>
    <ul>
      <li>
        <a href="/data-01">data-01</a>
      </li>
      <li>
        <nuxt-link to="data-01">data-01</nuxt-link>
      </li>
      <li>
        <nuxt-link to="data-04">data-04</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/info/history">History</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/student/100?id=5">Student 100</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/student/info?code=100&id=5">Student Info</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
