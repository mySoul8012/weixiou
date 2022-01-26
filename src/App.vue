<template>
  <div>
    <div v-show="show04">
      <el-row style="text-align: center;margin: 3vw;margin-top: 50vw;font-size: 7vw">
        {{yu.index04[0]}}
      </el-row>
    </div>
    <div v-show="show03" class="show03">
      <el-row class="what">
        <span>{{yu.index03[0]}}</span>
      </el-row>
      <el-row class="please">
        <span>{{yu.index03[1]}}</span>
      </el-row>
      <el-row>
        <el-progress :text-inside="true" :stroke-width="26" :percentage="jindu"></el-progress>
      </el-row>
      <div style="margin-top: 5vw">
        <el-row style="margin-bottom: 3vw">
          <span>{{yu.index03[2]}}</span>
        </el-row>
        <el-row class="radio">
          <el-radio v-model="how" label="1" @change="how01">{{yu.index03[3]}}</el-radio>
        </el-row>
        <el-row class="radio">
          <el-radio v-model="how" label="2" @change="how01">{{yu.index03[4]}}</el-radio>
        </el-row>
        <el-row class="radio">
          <el-radio v-model="how" label="3" @change="how01">{{yu.index03[5]}}</el-radio>
        </el-row>
        <el-row class="radio" style="margin-bottom: 5vw">
          <el-radio v-model="how" label="4" @change="how01">{{yu.index03[6]}}</el-radio>
        </el-row>
      </div>
      <div style="margin-top: 5vw">
        <el-row style="margin-bottom: 3vw">
          <span>{{yu.index03[7]}}</span>
        </el-row>
        <el-row>
          <el-container style="text-align: center">
            <el-col :span="12">
              <el-row>{{yu.index03[8]}}</el-row>
            </el-col>
            <el-col :span="12">
              <el-row>{{yu.index03[9]}}</el-row>
            </el-col>
            <el-col :span="12">
              <el-row>{{yu.index03[10]}}</el-row>
            </el-col>
            <el-col :span="12">
              <el-row>{{yu.index03[11]}}</el-row>
            </el-col>
            <el-col :span="12">
              <el-row>{{yu.index03[[12]]}}</el-row>
            </el-col>
          </el-container>
          <el-container style="text-align: center">
            <el-col :span="12">
              <el-row>
                <el-radio v-model="product" label="1" @change="product01">&nbsp;</el-radio>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-row>
                <el-radio v-model="product" label="2" @change="product01">&nbsp;</el-radio>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-row>
                <el-radio v-model="product" label="3" @change="product01">&nbsp;</el-radio>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-row>
                <el-radio v-model="product" label="4" @change="product01">&nbsp;</el-radio>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-row>
                <el-radio v-model="product" label="5" @change="product01">&nbsp;</el-radio>
              </el-row>
            </el-col>
          </el-container>
        </el-row>
      </div>
      <div style="margin-top: 5vw">
        <el-row>{{yu.index03[13]}}</el-row>
        <el-row>
          <el-rate class="xinxin"
                   @change="xinxin01"
                   v-model="deserve"
                   :colors="colors">
          </el-rate>
        </el-row>
      </div>
      <div style="margin-top: 5vw">
        <el-row style="margin-bottom: 3vw">{{yu.index03[14]}}</el-row>
<!--        <el-row style="margin-bottom: 3vw;font-size: 3vw;color: #909399">Please to be</el-row>-->
        <el-input
            @change="comment01"
            type="textarea"
            :rows="2"
            v-model="comment">
        </el-input>
      </div>
      <el-row style="margin-top: 10vw">
        <el-button @click="save" size="medium" class="button01" type="primary">{{yu.index02[7]}}</el-button>
      </el-row>
    </div>
    <div v-show="show02" class="div2">
      <el-row class="congratulations">
        <span>{{yu.index02[0]}}</span>
      </el-row>
      <el-row class="your">
        <span>{{yu.index02[1]}}<i class="el-icon-success" style="color: #42b983"></i></span>
      </el-row>
      <el-row class="clam">
        <span>{{yu.index02[2]}}</span>
      </el-row>
      <el-row class="simp">
        <span>{{yu.index02[3]}}</span>
      </el-row>
      <div style="text-align: left">
      <el-row class="boottom">
        <el-checkbox v-model="checked" style="color: yellow;background-color: yellow;"></el-checkbox><span>{{yu.index02[4]}}</span>
      </el-row>
      <el-row class="boottom">
        <el-checkbox v-model="checked1" style="background-color: yellow"></el-checkbox><span>{{yu.index02[5]}}</span>
      </el-row>
      <el-row class="boottom">
        <el-checkbox v-model="checked2" style="background-color: yellow"></el-checkbox><span>{{yu.index02[6]}}</span>
      </el-row>
      </div>
      <el-row class="button">
        <el-button @click="next" size="medium" class="button01" type="primary">{{yu.index02[7]}}</el-button>
      </el-row>
    </div>
    <div v-show="show01">
      <el-row class="title">
        <span>{{yu.index01[0]}}</span>
      </el-row>
      <el-row class="wenzhi">
        <span>{{yu.index01[1]}}</span>
      </el-row>
      <el-row class="wenzhi">
        <span>{{yu.index01[2]}}</span>
      </el-row>
      <el-row class="shurukuan">
        <el-row class="title01">
          {{yu.index01[3]}}&nbsp;<span class="xinhao">*</span>
        </el-row>
        <el-input v-model="name" ></el-input>
<!--        <el-row class="bottom">-->
<!--          {{yu.index01[4]}}-->
<!--        </el-row>-->
      </el-row>
      <el-row class="shurukuan">
        <el-row class="title01">
          {{yu.index01[4]}}&nbsp;<span class="xinhao">*</span>
        </el-row>
        <el-input v-model="email" ></el-input>
      </el-row>
      <el-row class="shurukuan">
        <el-row class="title01">
          {{yu.index01[5]}}&nbsp;<span class="xinhao">*</span>
        </el-row>
        <el-input v-model="orderId"></el-input>
<!--        <el-row class="bottom">-->
<!--          Please input your order ID-->
<!--        </el-row>-->
      </el-row>
      <el-row class="button">
        <el-button @click="active" size="medium" class="button01" type="primary">{{yu.index01[6]}}</el-button>
      </el-row>
    </div>
    <el-dialog
        :visible.sync="dialogVisible"
        width="80%"
        :show-close="showClose">
      <el-row class="row">
        <el-radio v-model="radio" label="1">English</el-radio>
      </el-row>
      <el-row class="row">
        <el-radio v-model="radio" label="2">Deutsch</el-radio>
      </el-row>
      <el-row class="row">
        <el-radio v-model="radio" label="3">français</el-radio>
      </el-row>
      <el-row class="row">
        <el-radio v-model="radio" label="4">español</el-radio>
      </el-row>
      <el-row class="row">
        <el-radio v-model="radio" label="5">日本語</el-radio>
      </el-row>
      <el-row class="row">
        <el-radio v-model="radio" label="6">italiano</el-radio>
      </el-row>
      <el-row class="row1">
        <el-button type="text" @click="ok">OK</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import Bmob from "hydrogen-js-sdk";


export default {
  name: 'App',
  data: function () {
    return {
      dialogVisible: true,
      showClose: false,
      radio: "1",
      name: "",
      email: "",
      orderId: "",
      show01: true,
      show02: false,
      show03: false,
      show04: false,
      how: null,
      product: null,
      deserve: null,
      comment: null,
      jindu: 0,
      flag: true,
      flag01: true,
      flag02: true,
      flag03: true,
      checked: "",
      checked1: "",
      checked2: "",
      english: {
        index0: "error",
        index01: ["Activate your warranty now", "Make sure you do this 100% as a genuine purchase of our product", "Fill out this simple form and your product will include a warranty and our 90-day money-back guarantee (including return shipping)", "Name", "Email", "Order ID", "Activate Now"],
        index02: ["congratulate", "Your product warranty has been activated", "Choose your gift now ","3 easy steps to get these gifts", "1.3 years warranty", "2. $10 happiness fund (staff member will contact you)", "3. Eligibility for free gift on arrival of new products of the same brand", "NEXT STEP"],
        index03: ["What is your experience with our products?", "Please answer the following questions, your feedback is very important to us", "How long have you been using our products", "None Less", "than 15 days", "15 to 30 days", "More than 30 days", "Your evaluation of our products", "like it very much", "like ", "so so", "do not like", "Hate", "How many stars should our products get", "What do you think about this product"],
        index04: ["Thank you very much for your support of our products.\n" +
        "\n" +
        "Please copy your evaluation of the product to Amazon, so that more buyers can witness the growth of the product. thanks\n" +
        "\n" +
        "After 1-2 days, the customer service will contact you by email and issue the gift, please pay attention to the email"]
      },
      de: {
        index0: "Error",
        index01: ["Aktivieren Sie jetzt Ihre Garantie", "Stellen Sie sicher, dass Sie dies zu 100 % als echten Kauf unseres Produkts tun", "Füllen Sie dieses einfache Formular aus und Ihr Produkt wird eine Garantie und unsere 90-tägige Geld-zurück-Garantie beinhalten ( einschließlich Rückversand)", "Name", "E-Mail", "Bestell-ID", "Jetzt aktivieren"],
        index02: ["Glückwunsch", "Ihre Produktgarantie wurde aktiviert", "Wählen Sie jetzt Ihr Geschenk ","3 einfache Schritte, um diese Geschenke zu erhalten", "1,3 Jahre Garantie", "2. 10 $ Glücksguthaben (ein Mitarbeiter wird sich mit Ihnen in Verbindung setzen)", "3. Anspruch auf ein kostenloses Geschenk bei der Ankunft neuer Produkte derselben Marke", "NÄCHSTER SCHRITT"],
        index03: ["Wie sind Ihre Erfahrungen mit unseren Produkten?", "Bitte beantworten Sie die folgenden Fragen, Ihr Feedback ist uns sehr wichtig", "Wie lange verwenden Sie unsere Produkte schon", "None Less", "seit 15 Tagen", "15 bis 30 Tage", "Mehr als 30 Tage", "Ihre Bewertung unserer Produkte", "gefällt mir sehr", "gefällt mir", "so so", "gefällt mir nicht", "Hass", "Wie viele Sterne sollen unsere Produkte bekommen", "Was denken Sie über dieses Produkt"],
        index04: ["Vielen Dank für Ihre Unterstützung unserer Produkte.\n" +
        "\n" +
        "Bitte kopieren Sie Ihre Bewertung des Produkts zu Amazon, damit mehr Käufer das Wachstum des Produkts miterleben können. danke\n" +
        "\n" +
        "Nach 1-2 Tagen wird sich der Kundenservice per E-Mail mit Ihnen in Verbindung setzen und das Geschenk ausstellen, bitte achten Sie auf die E-Mail"]
      },
      fa: {
        index0: "Erreur",
        index01: ["Activez votre garantie maintenant", "Assurez-vous de le faire à 100 % comme un achat authentique de notre produit", "Remplissez ce formulaire simple et votre produit inclura une garantie et notre garantie de remboursement de 90 jours ( y compris les frais de retour)", "Nom", "Email", "ID de commande", "Activer maintenant"],
        index02: ["féliciter", "La garantie de votre produit a été activée", "Choisissez votre cadeau maintenant ","3 étapes faciles pour obtenir ces cadeaux", "1,3 ans de garantie", "2. Fonds de bonheur de 10 $ (un membre du personnel vous contactera)", "3. Admissibilité à un cadeau gratuit à l'arrivée de nouveaux produits de la même marque", "PRÓXIMO PASO"],
        index03: ["Quelle est votre expérience avec nos produits ?", "Veuillez répondre aux questions suivantes, vos commentaires sont très importants pour nous", "Depuis combien de temps utilisez-vous nos produits", "Aucun moins", "plus de 15 jours ", "15 à 30 jours", "Plus de 30 jours", "Votre évaluation de nos produits", "J'aime beaucoup", "J'aime", "Donc", "Je n'aime pas", "Je déteste", "Combien d'étoiles nos produits doivent-ils obtenir", "Que pensez-vous de ce produit"],
        index04: ["Merci beaucoup pour votre soutien à nos produits.\n" +
        "\n" +
        "Veuillez copier votre évaluation du produit sur Amazon, afin que davantage d'acheteurs puissent assister à la croissance du produit. Merci\n" +
        "\n" +
        "Après 1-2 jours, le service client vous contactera par e-mail et émettra le cadeau, veuillez faire attention à l'e-mail"]
      },
      xi: {
        index0: "error",
        index01: ["Active su garantía ahora", "Asegúrese de hacerlo 100% como una compra genuina de nuestro producto", "Complete este sencillo formulario y su producto incluirá una garantía y nuestra garantía de devolución de dinero de 90 días ( incluido el envío de devolución)", "Nombre", "Correo electrónico", "ID de pedido", "Activar ahora"],
        index02: ["felicitar", "Se ha activado la garantía de su producto", "Elija su regalo ahora ","3 sencillos pasos para obtener estos regalos", "1,3 años de garantía", "2. Fondo de felicidad de $10 (miembro del personal se pondrá en contacto con usted)", "3. Elegibilidad para obsequio a la llegada de nuevos productos de la misma marca", "PRÓXIMO PASO"],
        index03: ["¿Cuál es su experiencia con nuestros productos?", "Por favor responda las siguientes preguntas, su opinión es muy importante para nosotros", "¿Cuánto tiempo ha estado usando nuestros productos", "Nada menos", "más de 15 días ", "De 15 a 30 días", "Más de 30 días", "Tu evaluación de nuestros productos", "Me gusta mucho", "Me gusta", "Regular", "No me gusta", "Odio", "¿Cuántas estrellas deberían tener nuestros productos?", "¿Qué opinas de este producto?"],
        index04: ["Muchas gracias por su apoyo a nuestros productos.\n" +
        "\n" +
        "Copie su evaluación del producto a Amazon, para que más compradores puedan presenciar el crecimiento del producto. Gracias\n" +
        "\n" +
        "Después de 1-2 días, el servicio de atención al cliente se comunicará con usted por correo electrónico y le entregará el regalo, preste atención al correo electrónico"]
      },
      yi: {
        index0: "errore",
        index01: ["Attiva ora la tua garanzia", "Assicurati di farlo al 100% come un acquisto autentico del nostro prodotto", "Compila questo semplice modulo e il tuo prodotto includerà una garanzia e la nostra garanzia di rimborso di 90 giorni ( inclusa la spedizione di ritorno)", "Nome", "E-mail", "ID ordine", "Attiva ora"],
        index02: ["congratulazioni", "La garanzia del tuo prodotto è stata attivata", "Scegli ora il tuo regalo"," 3 semplici passaggi per ottenere questi regali", "1,3 anni di garanzia", "2. Fondo felicità di $ 10 (un membro del personale ti contatterà)", "3. Idoneità all'omaggio all'arrivo di nuovi prodotti della stessa marca", "PASSO SUCCESSIVO"],
        index03: ["Qual è la tua esperienza con i nostri prodotti?", "Rispondi alle seguenti domande, il tuo feedback è molto importante per noi", "Da quanto tempo usi i nostri prodotti", "None Less", "Da 15 giorni ", "Da 15 a 30 giorni", "Più di 30 giorni", "La tua valutazione dei nostri prodotti", "Mi piace molto", "Mi piace", "Così così", "Non mi piace", "Odio", "Quante stelle dovrebbero ottenere i nostri prodotti", "Cosa ne pensi di questo prodotto"],
        index04: ["Grazie mille per il supporto dei nostri prodotti.\n" +
        "\n" +
        "Copia la tua valutazione del prodotto su Amazon, in modo che più acquirenti possano assistere alla crescita del prodotto. grazie\n" +
        "\n" +
        "Dopo 1-2 giorni, il servizio clienti ti contatterà via e-mail ed emetterà il regalo, si prega di prestare attenzione all'e-mail"]
      },
      ri: {
        index0: "エラー",
        index01: ["今すぐ保証を有効にしてください", "これは当社製品の本物の購入として100％行うようにしてください", "この簡単なフォームに記入すると、製品に保証と90日間の返金保証が含まれます（返品送料を含む）", "「名前」", "「メール」", "「注文ID」", "「今すぐ有効化」"],
        index02: ["おめでとう", "製品保証が有効になりました", "今すぐギフトを選択してください","これらのギフトを受け取るための3つの簡単なステップ", "1。3年保証", "2。10ドルの幸福基金（スタッフがあなたに連絡します）", "3。同じブランドの新製品の到着時に無料ギフトの資格", "次のステップ "],
        index03: ["当社の製品についてのあなたの経験は何ですか？", "次の質問に答えてください。あなたのフィードバックは私たちにとって非常に重要です", "当社の製品をどのくらい使用していますか", "なし", "15日未満", "15〜30日", "30日以上", "当社製品の評価", "とても気に入っています", "のように ", "そうそう ", "嫌い ", "嫌い ", "私たちの製品は何個の星を獲得する必要がありますか", "この製品についてどう思いますか"],
        index04: ["当社の製品をご愛顧いただき、誠にありがとうございます.\n" +
        "\n" +
        "より多くのバイヤーが製品の成長を目撃できるように、製品の評価をAmazonにコピーしてください。ありがとう.\n" +
        "\n" +
        "1〜2日後、カスタマーサービスからメールで連絡があり、ギフトが発行されます。メールに注意してください"]
      },
      yu:{
        index0: "error",
        index01: ["Activate your warranty now", "Make sure you do this 100% as a genuine purchase of our product", "Fill out this simple form and your product will include a warranty and our 90-day money-back guarantee (including return shipping)", "Name", "Email", "Order ID", "Activate Now"],
        index02: ["congratulate", "Your product warranty has been activated", "Choose your gift now ","3 easy steps to get these gifts", "1.3 years warranty", "2. $10 happiness fund (staff member will contact you)", "3. Eligibility for free gift on arrival of new products of the same brand"],
        index03: ["What is your experience with our products?", "Please answer the following questions, your feedback is very important to us", "How long have you been using our products", "None Less", "than 15 days", "15 to 30 days", "More than 30 days", "Your evaluation of our products", "like it very much", "like ", "so so", "do not like", "Hate", "How many stars should our products get", "What do you think about this product"],
        index04: ["Thank you very much for your support of our products.\n" +
        "\n" +
        "Please copy your evaluation of the product to Amazon, so that more buyers can witness the growth of the product. thanks\n" +
        "\n" +
        "After 1-2 days, the customer service will contact you by email and issue the gift, please pay attention to the email"]
      }
    }
  },
  onLoad() {

  },
  methods: {
    save: function () {
      if (this.how != null) {
        if (this.product != null) {
          if (this.deserve != null) {
            if (this.comment != null) {
              this.show01 = false;
              this.show02 = false;
              this.show03 = false;
              this.show04 = true
              console.log("--------------------------------------------------------")
              console.log(this.deserve);
              const query = Bmob.Query('info');
              query.set("comment", this.comment)
              query.set("deserve", this.deserve.toString())
              query.set("product", this.product)
              query.set("how", this.how)
              query.set("orderId", this.orderId)
              query.set("email", this.email)
              query.set("name", this.name)
              query.save().then(res => {
                console.log(res)
              }).catch(err => {
                console.log(err)
              })
            }
          }
        }
      }

    },
    comment01: function () {
      if (this.flag03) {
        this.jindu += 25
      }
      this.flag03 = false;
    },
    xinxin01: function () {
      if (this.flag02) {
        this.jindu += 25
      }
      this.flag02 = false;
    },
    product01: function () {
      if (this.flag) {
        this.jindu += 25
      }
      this.flag = false;
    },
    how01: function () {
      if (this.flag01) {
        this.jindu += 25
      }
      this.flag01 = false;
    },
    next: function () {
      this.show01 = false;
      this.show02 = false;
      this.show03 = true;
    },
    ok: function () {
      this.dialogVisible = false;
      if(this.radio == 1){
        this.yu = this.english;

      }
      if(this.radio == 2){
        this.yu = this.de;
      }
      if(this.radio == 3){
        this.yu = this.fa;
      }
      if(this.radio == 4){
        this.yu = this.xi
      }
      if(this.radio == 5){
        this.yu = this.ri
      }
      if(this.radio == 6){
        this.yu = this.yi;
      }
    },
    active: function () {
      let patt = /[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
      let res = patt.test(this.orderId);
      if (!res) {
        let that = this;
        this.$notify({
          title: that.yu.index0,
          message: that.yu.index0,
          type: 'warning'
        });
      } else {
        localStorage.name = this.name;
        localStorage.email = this.email;
        localStorage.orderId = this.orderId;
        this.show01 = false;
        this.show02 = true;
      }
    }
  }
}
</script>

<style>
.xinxin {
  font-size: 10vw;
}

.radio {
  margin-bottom: 2vw;
}

.please {
  margin-bottom: 5vw;
}

.what {
  font-size: 7vw;
  margin-bottom: 5vw;
}

.show03 {
  margin: 3vw;
  margin-top: 5vw;
}

.boottom {
  margin: 5vw;
}

.simp {
  margin: 5vw;
  font-size: 4vw;
}

.clam {
  background-color: #ffc61a;
  margin: 5vw;
  padding: 3vw;
  border-radius: 6vw;
}

.your {
  margin: 5vw;
}

.congratulations {
  margin: 5vw;
  margin-top: 10vw;
}

.div2 {
  text-align: center;
  font-size: 5vw;
}

.button01 {
  width: 100%;
  height: 15vw;
}

.button {
  margin-left: 3vw;
  margin-right: 5vw;
  margin-top: 40vw;
}

.bottom {
  color: #909399;
}

.shurukuan {
  margin-top: 5vw;
  margin-left: 3vw;
  margin-right: 5vw;
}

.title01 {
  margin-bottom: 2vw;
}

.xinhao {
  color: red;
}

.wenzhi {
  margin: 3vw;
  margin-top: 9vw;
}

.title {
  margin: 3vw;
  font-size: 5vw;
  margin-top: 8vw;
  background-color: cornflowerblue;
  padding: 5vw;
  color: #FFFFFF;
}

.row {
  margin: 7vw;
}

.row1 {
  text-align: right;
}
</style>
