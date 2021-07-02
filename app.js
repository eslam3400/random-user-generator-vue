const app = Vue.createApp({
  data() {
    return {
      picture: null,
      cell: null,
      dob: { age: null, date: null },
      email: null,
      gender: null,
      id: { name: null, value: null },
      location: {
        city: null,
        coordinates: { latitude: null, longitude: null },
        country: null,
        postcode: null,
        state: null,
        street: { name: null, nmber: null },
        timezone: { discription: null, offset: null },
      },
      name: { first: null, last: null, title: null },
      nat: null,
      phone: null,
    };
  },
  methods: {
    async generate() {
      const res = await fetch("https://randomuser.me/api/");
      const { results } = await res.json();
			console.log(results[0])
			this.picture = results[0].picture.large
			this.cell = results[0].cell
			this.dob.age = results[0].dob.age
			this.dob.date = results[0].dob.date
			this.email = results[0].email
			this.gender = results[0].gender
			this.id.name = results[0].id.name
			this.id.value = results[0].id.value
			this.location.city = results[0].location.city
			this.location.coordinates.latitude = results[0].location.coordinates.latitude
			this.location.coordinates.longitude = results[0].location.coordinates.longitude
			this.location.country = results[0].location.country
			this.location.postcode = results[0].location.postcode
			this.location.state = results[0].location.state
			this.location.street.name = results[0].location.street.name
			this.location.street.number = results[0].location.street.number
			this.location.timezone.discription = results[0].location.timezone.discription
			this.location.timezone.offset = results[0].location.timezone.offset
			this.name.first = results[0].name.first
			this.name.last = results[0].name.last
			this.name.title = results[0].name.title
			this.nat = results[0].nat
			this.phone = results[0].phone
    },
  },
});

app.mount("#app");
