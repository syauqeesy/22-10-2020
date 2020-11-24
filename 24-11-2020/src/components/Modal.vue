<template>
  <div class="modal">
    <div class="modal-content">
      <h1>Ahmad Syauqi</h1>
      <p>email : {{ email }}</p>
      <p>password : {{ password }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['email', 'password']
}
</script>

<style scoped lang="sass">
.modal
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  background-color: rgba(0, 0, 0, .3)
  display: none
  .modal-content
    margin: 25vh auto
    width: 35em
    background-color: white
    padding: 2em
    h1
      margin-bottom: 2em
</style>
