

import React from "react";
import { ReactComponent as Emoji } from "../../../build/images/emoji.svg";
import { PopUver } from "../../../utils/Typpy";
import { Picker } from 'emoji-mart'

const renderPopoverEmoji = (e,addEmoji) => (
  <div class="context-menu emoji-container" id="emoji-container">
    <div class="context-menu__list">
       <Picker 
       onSelect={addEmoji}
       set='google'
       showPreview={false}
       showSkinTones={false}
       skin='1'
       autoFocus='true'
       i18n={{search: 'Buscar um emoji',
       clear: 'Limpar', // Accessible label on "clear" button
       notfound: 'Nenhum emoji encontrado',
       skintext: 'Default Skin Tone',
       skintones: {
        1: 'Light Skin Tone',
      },
       categories: {
         search: 'Resultados da busca',
         recent: 'Recentes',
         smileys: 'Emojis e Pessoas',
         people: 'Emojis e Pessoas',
         nature: 'Animais e natureza',
         foods: 'Comida e Bebida',
         activity: 'Atividades',
         places: 'Viagens & Locais',
         objects: 'Objetos',
         symbols: 'Símbolos',
         flags: 'Bandeiras',
         custom: 'Custom',
       }}}
       />
    </div>
  </div>
);

const EmojiContainer = ({addEmoji}) => {

  return (
        <PopUver trigger="click" interactive={true} content={renderPopoverEmoji(this,addEmoji)}>
          <button class="mini-chat__footer__input-content__emoji tippy-context-menu" data-template="emoji">
              <Emoji />
          </button>
        </PopUver>
  );
};

export default EmojiContainer;
