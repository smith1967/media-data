<template>
  <dir>
    <h1>Student Code : {{$route.params.code}} {{$route.query}}</h1>
    <button @click="$router.go(-1)">Back</button>
  </dir>
</template>
