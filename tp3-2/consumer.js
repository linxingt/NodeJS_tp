import {Kafka} from 'kafkajs';
import {createClient} from 'redis';

const kafka = new Kafka({
    brokers: ['redpanda-0:9092', 'localhost:19092']
});

const client = createClient({
    host: 'myredis', // Redis server host
    port: 6379,               // Redis server port
    password: "redispwd"
});
client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

const increment = (mots) => {
    // client.INCR(mot);
    mots.map(mot => {
        client.INCR(mot)
    });
};

const consumer = kafka.consumer({groupId: 'my-group'});
export const connexion = async () => {
    await consumer.connect();
    console.log('Consumer connected to Kafka broker');
    await consumer.subscribe({topic: 'mon-super-topic', fromBeginning: true});
    await consumer.run({
        eachMessage: async ({topic, partition, message}) => {
            // Traitez chaque message ici
            console.log(`Received message on topic ${topic}, partition ${partition} at ${formattedDate(message.timestamp.toString())}: ${message.value}`);
            const stringValue = JSON.parse(message.value.toString());
            const messageValue = stringValue.message;
            const words = messageValue.split(' ');
            console.log(`Received words : ${words}`);
            increment(words);
        },
    });

};

export const disconnect = async () => {
    await consumer.disconnect();
    console.log('Consumer disconnected from Kafka broker');
};

const formattedDate = (timestamp) => {
    const intValue = parseInt(timestamp);
    const date = new Date(intValue);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} à ${hours}:${minutes}`;

}