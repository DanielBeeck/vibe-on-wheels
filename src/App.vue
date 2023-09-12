<template>
  <HeaderVue />
  <flatpickr />
  <div id="rentwindow">
    <form>
      <p>Miete ein Auto in deiner Nähe</p>
      <input id="pickupLoc" type="text" placeholder="Abholort" />
      <input
        id="pickupDate"
        ref="startDatePicker"
        type="text"
        class="date-range-picker"
        placeholder="Abholdatum"
      />
      <input
        id="bringbackDate"
        ref="endDatePicker"
        type="text"
        class="date-range-picker"
        placeholder="Rückgabedatum"
      />
    </form>
    <img src="../src/assets/img/hyundai-motor-group-P45K3ewrATs-unsplash.jpg" alt="">
  </div>
  <h2>Services</h2>
  <div id="services">
    <div class="service">
      <img src="../src/assets/img/frontcar.png" alt="front of a car">
      <h3>Flexibler Autoverleih</h3>
      <p>Wählen Sie aus Autos zu verschiedenen anlässen.</p>
    </div>
    <div class="bookingproc">
      <img src="../src/assets/img/dino-reichmuth.jpg" alt="">
      <h3>Bequemer Buchungsprozess</h3>
      <p>
        Buchen sie ein Auto online über unser Portal oder kommen Sie zu uns in
        die Filiale.
      </p>
    </div>
    <div class="customersupport">
      <img src="../src/assets/img/nate-johnston-.jpg" alt="">
      <h3>Exzellenter Kundesupport</h3>
      <p>
        Unser freundliches und erfahrenes Team ist jederzeit bereit bei
        Fragen zu Unterstützen.
      </p>
    </div>
  </div>

  <div id="recommendation">
    <p>
      Vibe on Wheels hat meine Mietwagenerfahrung außergewöhnlich
      gemacht! Das Personal war freundlich, die Abwicklung verlief reibungslos,
      und das Auto war in einem tollen Zustand. Vielen Dank für den problemlosen
      und angenehmen Service. Sehr zu empfehlen!
      <br><br>
      - Sarah
    </p>
  </div>

  <h2>About us</h2>
  <p>
    Vibe on Wheels ist eine Autovermietung in Bochum, NW. Unser Ziel ist eine
    stressfreie Autovermietung mit einer großen Auswahl an gut gewarteten
    Fahrzeugen für verschiedene Bedürfnisse. Wir bieten wettbewerbsfähige Preise
    und flexible Mietoptionen. Unser Team strebt exzellenten Kundenservice an,
    um Ihre Erfahrung zu optimieren. Danke für Ihre Wahl von Vibe on Wheels!
  </p>
  <FooterVue/>
</template>

<script>
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue"
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/light.css";

export default {
  name: "App",
  components: {
    HeaderVue,
    FooterVue,
  },
  mounted() {
    flatpickr(this.$refs.startDatePicker, {
      // Configuration for the start date picker
      minDate: "today",
      maxDate: new Date().fp_incr(14), // 14 days from now
    });

    flatpickr(this.$refs.endDatePicker, {
      // Configuration for the end date picker
      minDate: "today",
      maxDate: new Date().fp_incr(14), // 14 days from now
    });
  },
};
</script>

<style lang="scss">
@import "@/../main.scss";
</style>
