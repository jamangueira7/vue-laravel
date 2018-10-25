<script>
  export default {
    name: 'accounts-edit',
    data: function () {
      return {
        sub_title: 'Editando Conta',
        account: {}
      }
    },
    template: require('./form.html'),
    methods: {
      save () {
        this.$store.dispatch('updateAccount', this.account).then(() => {
          this.$router.push('/contas')
        })
      }
    },
    computed: {
      banks () {
        return this.$store.state.bank.bankList
      },
      hisAccount () {
        this.account = this.$store.state.account.accountView
      }
    },
    created () {
      this.$store.dispatch('getBanks')
      this.$store.dispatch('getAccount', this.$route.params.id)
    }

  }
</script>
