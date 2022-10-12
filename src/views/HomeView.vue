<template>
  <div class="home">
    <LogoSlogan/>
  </div>
</template>

<script>
import LogoSlogan from "@/components/LogoSlogan.vue"

export default 
{
  components: 
  {
    LogoSlogan
  },
};
</script>
<style>
#regLogo
{
  height: 200px;
}

h1
{
  text-align: center;
  font-size: 4rem;
  color: black;
  font-family: 'Abhaya Libre', serif;
  border-bottom: 2px solid rgb(20 184 166);
  margin-bottom: 2rem;
}
#boxRegisLogo
{
  width: 100%;
  background-color: rgb(20 184 166);
}

#boxRegis
{
  width: 800px;
  border: 2px solid rgb(20 184 166);
  justify-content: center;
}

.row 
{
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-.5 * var(--bs-gutter-x));
  margin-left: calc(-.5 * var(--bs-gutter-x));
  margin-bottom: 10px;
  font-family: 'Roboto Mono', monospace;
  color: black;
  
}

[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #def2f1;
    border-color: rgb(20 184 166);
    border-width: 1px;
    border-radius: 10px;
    padding-top: 0.5rem;
    padding-right: 0.75rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
}
</style>