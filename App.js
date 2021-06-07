import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
  ScrollView,

} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estudante: false,
      limite: 500,
      nome: '',
      idade: '',
      telefone: '',
      sexo: 0,
      sexos: [
        {sexoNome:'Masculino', valor: 1},
        {sexoNome:'Feminino', valor:2},
        {sexoNome:'Não Binário', valor:3},
        {sexoNome:'Outro', valor:4},
      ],
    };
    this.enviarDados = this.enviarDados.bind(this);
  }

  //Metodo que é chamado quando você clica no botao Abrir Conta
enviarDados(){

  if(this.state.nome === '' || this.state.idade === '' || this.state.telefone === ''){
  alert('Preencha todos dados corretamente!')
  return;
  }
  
  alert(
  'Conta aberta com sucesso!! \n\n' +
  'Nome: '+this.state.nome + '\n' +
  'Idade: ' + this.state.idade + '\n' +
  'Telefone ' + this.state.telefone + '\n' +
  'Sexo: '+ this.state.sexos[this.state.sexo].sexoNome + ' \n' +
  'Limite Conta: ' + this.state.limite.toFixed(2) + '\n' +
  'Conta Estudante: ' + ((this.state.estudante)? 'Ativo' : 'Inativo')
  ); 
}


  render() {
    //Retorna os items do Picker do sexo
    let sexoItems = this.state.sexos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.sexoNome}/>
    }); 

    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>

          <View style={styles.textoarea}>
            <Image
              source={require('./src/dinheiro.jpg')}
              style={styles.img}
            />
            <Text style={styles.titulo}>MILLA'S BANK </Text>
            <Text style={styles.texto} >Preparado para ver o seu dinheiro render? </Text>
            <Text style={styles.texto}>Solicite agora a abertura da sua conta. </Text>
          </View>


          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            underlineColorAndroid="transparent"
            onChangeText={(texto) => this.setState({nome: texto})}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua idade"
            underlineColorAndroid="transparent"
            onChangeText={(texto) => this.setState({idade: texto})}
            keyboardType="numeric" // Deixando teclado apenas numerico
          />

          <TextInput
            style={styles.input}
            placeholder="Digite seu telefone com DDD"
            underlineColorAndroid="transparent"
            onChangeText={(texto) => this.setState({telefone: texto})}
            keyboardType="numeric"
          />

          <Picker
            style={styles.picker}
            selectedValue={this.state.sexo} 
            onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>  
            {sexoItems}
          </Picker>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
            <Text style={styles.textolimite}>Seu Limite</Text>
            <Text style={styles.textolimite}>R$ {this.state.limite.toFixed(2)}</Text>
          </View>

          <Slider
            style={styles.slider}
            minimumValue={500}
            maximumValue={2500}
            minimumTrackTintColor="#008000"
            maximumTrackTintColor="#708090"
            onValueChange={(limite)=> this.setState({limite: limite})}
            value={this.state.limite}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
            <Text style={styles.textoestudante}>Sou estudante</Text>
            <Switch
              value={this.state.estudante}
              onValueChange={(valorEstudante) => this.setState({estudante: valorEstudante})}
            />
          </View>

          <TouchableOpacity style={styles.botao} onPress={this.enviarDados}>
            <Text style={styles.textobotao}>ABRIR CONTA</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    fontSize: 18,
    margin: 16,
    marginLeft: 32,
    marginRight: 32,
    padding: 10,

  },
  img: {
    width: 160,
    height: 100,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32
  },
  titulo: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 20,
  },
  texto: {
    marginTop: 10,
    fontSize: 18,

  },
  textoarea: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20

  },
  textolimite: {
    marginLeft: 32,
    marginRight: 32,
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  picker: {
    marginLeft: 32,
    marginRight: 32,
    fontSize: 18,
    margin: 10,

  },
  slider: {
    width: 350,
    height: 40,
    marginLeft: 32,
    marginRight: 32,

  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008000',
    height: 40,
    marginLeft: 32,
    marginRight: 32,
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 40
  },
  textobotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textoestudante: {
    marginLeft: 32,
    marginRight: 32,
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  }

});

export default Cadastro;
