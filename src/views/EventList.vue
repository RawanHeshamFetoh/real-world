<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard  v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventServices from '@/services/EventServices'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data(){
    return{
      
      events:null
    }
  },
  created(){
    EventServices.getEvents()
    .then(respond =>{
      this.events=respond.data
    })
    .catch(error=>{console.log(error)})
  }
}
</script>
<style scoped>
  .events{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
