<template>
  <div>
    <el-container>
      <el-header>
        <h1 class="contact-title">Contact EasyTravel</h1>
        <p>Douala - Cameroun</p>
      </el-header>

      <el-main>
        <el-footer>
          <div class="contact-info">
            <div class="info-item">
              <p>8 place du 8 mai 45, Sandillon, France, 45640</p>
              <HomeFilled class="icon" style="width: 24px; height: 24px;" />
            </div>
            <div class="info-item">
              <p>boucherie.npa.sandillon@gmail.com</p>
              <Message class="icon" style="width: 24px; height: 24px;" />
            </div>
            <div class="info-item">
              <p>02 38 57 99 48</p>
              <PhoneFilled class="icon" style="width: 24px; height: 24px;" />
            </div>
          </div>
        </el-footer>

        <el-form ref="form" :model="form" label-position="top" class="contact-form">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="Nom *">
                <el-input v-model="form.name" placeholder="Nom"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Email *">
                <el-input v-model="form.email" placeholder="Email"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="Adresse *">
            <el-input v-model="form.address" placeholder="Adresse"></el-input>
          </el-form-item>
          <el-form-item label="Téléphone *">
            <el-input v-model="form.phone" placeholder="Téléphone"></el-input>
          </el-form-item>
          <el-form-item label="Message *">
            <el-input type="textarea" v-model="form.message" placeholder="Tapez votre message"></el-input>
          </el-form-item>
          <el-form-item label="Agence :">
            <el-select v-model="form.agency" placeholder="Sélectionnez une agence">
              <el-option label="Bafoussam" value="Bafoussam"></el-option>
              <el-option label="Yaoundé" value="Yaoundé"></el-option>
              <el-option label="Douala" value="Douala"></el-option>
            </el-select>
          </el-form-item>
          <el-button type="primary" @click="submitForm">Envoyer le message</el-button>
        </el-form>
      </el-main>

    </el-container>
  </div>
</template>

<script>
import { HomeFilled, Message, PhoneFilled } from '@element-plus/icons-vue';

export default {
  components: {
    HomeFilled,
    Message,
    PhoneFilled
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        address: '',
        phone: '',
        message: '',
        agency: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log(this.form);
      // Ajouter la logique pour traiter le formulaire
    }
  }
};
</script>

<style scoped>
.contact-title {
  text-align: center;
  color: #28a745; /* Green color */
  margin-top: 20px;
  font-size: 24px;
}

.contact-form {
  margin-top: 30px;
}

.contact-info {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  color: #333;
}

.info-item {
  text-align: center;
}

.info-item .icon {
  color: #7d5a50;
}

.info-item p {
  margin-top: 10px;
  font-size: 16px;
}
</style>
