<template>
  <div>
    <div class="card" v-for="student in studentsWithOddId" v-bind:key="student.id">
      <p>id: {{ student.id }}</p>
      <p>name: {{ student.name }}</p>
      <p>student id: {{ student.studentId }}</p>
    </div>

    <form method="post">
      <div class="form-group">
        <input type="text" name="email" class="form" v-model="email" autocomplete="off" placeholder="email">
      </div>
      <div class="form-group">
        <input type="password" name="password" class="form"  v-model="password" autocomplete="off" placeholder="password">
      </div>
      <button @click="modalActive">modal button</button>
    </form>

    <Modal v-bind:class="{ active: isModalActive }" v-bind:password="password" v-bind:email="email" />
  </div>
</template>

<script>
import Modal from '../components/Modal'

export default {
  name: 'Home',
  components: {
    Modal: Modal
  },
  data: function () {
    return {
      firstName: 'Ahmad',
      lastName: 'Syauqi',
      students: [
        { id: 1, name: 'Ahmad Syauqi', studentId: 918291 },
        { id: 2, name: 'Aziz Rizki', studentId: 917423 },
        { id: 3, name: 'Raisa', studentId: 913728 },
        { id: 4, name: 'Alreza Ihsan', studentId: 917482 },
        { id: 5, name: 'Kiki Rijkiamsah', studentId: 938852 }
      ],
      email: '',
      password: '',
      isModalActive: false
    }
  },
  computed: {
    studentsWithOddId: function () {
      return this.students.filter(student => {
        return student.id % 2 === 1
      })
    }
  },
  methods: {
    modalActive: function (event) {
      event.preventDefault()
      this.isModalActive = !this.isModalActive
    }
  }
}
</script>

<style scoped lang="sass">
.card
  padding: 1.5em
  border: 1px solid #eee
  width: 30%
  margin: 1em auto
  border-radius: .3em
  p
    color: #888
    letter-spacing: 1px
    font-size: 1.5em

.form-group
  margin: 1em auto
  width: 50%
  .form
    display: block
    width: 100%
    height: 2em
    padding: 1em
    border: 1px solid #ccc
    font-size: 1em
    outline: none

.form-data
  padding: 1em
  border: 1px solid #eee
  width: 50%
  margin: 1em auto
  border-radius: .3em
  p
    font-size: 1.5em

.active
  display: block
</style>
