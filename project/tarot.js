// this is an object constructor
// AKA blueprint for different objects
// of that blueprint we are passing something into the object constructor
// to become the properties of that object
function card(name, description, image) {
    // targeting this instance of this object
    this.name = name;
    this.description = description;
    this.image = image;
}

// array of objects (the cards)
// this is the deck array with the objects that were built prior using the object constructor
var deck = [
    // card constructor
    new card ('Fool', 'A willingness to embrace the unknown and take risks with an open heart and mind. The figure on the card is often depicted as a young person, typically carefree and carrying a small bag, symbolizing the adventures and potential lessons that lie ahead. The Fool encourages us to trust our instincts, embark on new journeys, and be open to life\'s surprises and opportunities.', 'fool'),
    new card ('Devil', 'The Devil card serves as a warning to beware of excess, unhealthy attachments, or addictions that may be holding you captive. It encourages self-awareness and the need to break free from negative influences in your life. While the Devil can signify challenges, it also reminds us that we have the power to overcome them through self-awareness and liberation from our own limitations.', 'devil'),
    new card ('Empress', 'The Empress signifies a period of abundance, creativity, and maternal care. It can represent the birth of new ideas, projects, or even the arrival of a child. This card encourages you to connect with your nurturing and creative instincts and to embrace the natural cycles of life. The Empress is a symbol of growth, fertility, and the powerful energy of creation in various aspects of life.', 'empress'),
    new card ('Magician', 'The Magician signifies the power of transformation and the ability to turn your aspirations into reality. It encourages you to tap into your creativity, willpower, and potential to make things happen. This card suggests that you have the tools and skills needed to manifest your desires. It\'s a reminder that you possess the power to create your own reality through your actions and intentions. The Magician card symbolizes the mastery of one\'s own destiny and the ability to channel one\'s energy for positive change.', 'magician'),
    new card ('Priestess', 'The High Priestess signifies a deep connection to one\'s intuition and inner wisdom. This card encourages you to trust your instincts and explore the mysteries within yourself. It represents a time for introspection, meditation, and seeking answers from your inner self. The High Priestess suggests that you have the potential to tap into your subconscious and unlock hidden knowledge or insights. It\'s a card of mystery and a reminder to listen to your inner voice and honor your intuition.', 'priestess'),
    new card ('Tower', 'The Tower signifies a significant and often unforeseen disruption or change in your life. It can be a shocking event that brings down old beliefs, structures, or situations that were no longer serving your highest good. While the Tower card can bring chaos and discomfort, it also represents an opportunity for rebirth and transformation. It encourages you to embrace change and see it as a catalyst for growth and renewal. The Tower reminds us that sometimes, destruction paves the way for a fresh start and a better future.', 'tower'),
    new card ('Sun', 'the Sun card signifies a period of happiness, optimism, and clarity. It represents success and achievement, often after overcoming challenges or obstacles. The Sun card encourages you to bask in the light of your accomplishments and enjoy the simple pleasures in life. It signifies a time of enlightenment and personal growth, where you feel a strong connection to your true self. The Sun is a card of positivity and vitality, reminding you to embrace the joy that life can offer.', 'sun'),
    new card ('Lovers', 'The Lovers card signifies choices and relationships. It often represents a significant decision to be made, typically involving matters of the heart. It encourages you to choose with love and compassion, as the card suggests that your choices may have a profound impact on your life. The Lovers card symbolizes the power of love and connection, whether in romantic relationships, partnerships, or choices that align with your values and passions. It serves as a reminder to make decisions with your heart and intuition in mind.', 'lovers'),
];

// when the 'draw' button is clicked a random number from the array will be picked
function getRandom(num){
    // math object is used to generate a random number
    // this will give us a whole number between 0 and whatever is passed in
    var randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
}

document.getElementById("draw").onclick = function(event) {
    // prevents default behaviour of the link
    event.preventDefault();
    var index = getRandom(8);
    var currentCard = deck[index];

    var imageSize = 'width="100" height="150"';

    document.getElementById("wall_display").innerHTML = '<img '+ imageSize + ' src="assets/img/' + currentCard.image + '.jpg"><h3>' +
    currentCard.name + '</h3><p>' + currentCard.description + '</p>';

}


