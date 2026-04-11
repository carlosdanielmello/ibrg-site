// Menu mobile toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });

        // Dropdown mobile toggle - Sobre Nós
        const mobileDropdownButton1 = document.getElementById('mobile-dropdown-button-1');
        const mobileDropdown1 = document.getElementById('mobile-dropdown-1');
        const chevronIcon1 = mobileDropdownButton1.querySelector('i');

        mobileDropdownButton1.addEventListener('click', () => {
            mobileDropdown1.classList.toggle('hidden');
            chevronIcon1.classList.toggle('rotate-180');
        });

        // Dropdown mobile toggle - Ministérios
        const mobileDropdownButton2 = document.getElementById('mobile-dropdown-button-2');
        const mobileDropdown2 = document.getElementById('mobile-dropdown-2');
        const chevronIcon2 = mobileDropdownButton2.querySelector('i');

        mobileDropdownButton2.addEventListener('click', () => {
            mobileDropdown2.classList.toggle('hidden');
            chevronIcon2.classList.toggle('rotate-180');
        });

        // Missionaries Data with extended details
        const missionaries = [
            {
                id: 1,
                name: "Pr. Amarildo Nunes",
                description: "O pastor Amarildo Nunes serve ao Senhor na Congregação Batista Regular da Graça, na cidade de Rio Preto da Eva, no estado do Amazonas. Ele é enviado pela Igreja Batista Regular da Graça.",
                church: "Congregação Batista Regular da Graça",
                location: "Rio Preto da Eva",
                city: "Rio Preto da Eva",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Igreja Batista Regular da Graça",
                baseImg: "/img/info/logo.png",
                phone: "(92) 99968-6404",
                image: "/img/missionarios/1.png",
            },
            {
                id: 2,
                name: "Pr. André Carneiro da Rocha",
                description: "O pastor André Carneiro serve ao Senhor na Congregação Batista Regular de Antioquia, na cidade de Manaus, no estado do Amazonas. Ele é enviado pela Igreja Batista Regular da Graça.",
                church: "Congregação Batista Regular de Antioquia",
                location: "Manaus",
                city: "Manaus",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Igreja Batista Regular da Graça",
                baseImg: "/img/info/logo.png",
                phone: "(92) 99410-0718",
                image: "/img/missionarios/2.png",
            },
                       {
                id: 3,
                name: "Miss. Bento Sérgio Santana de Souza",
                description: "O missionário Bento Sérgio serve ao Senhor na Congregação Batista Regular Elim, na cidade de Cascavel, no estado do Ceará.",
                church: "Congregação Batista Regular Elim",
                location: "Cascavel",
                city: "Cascavel",
                state: "CE",
                stateFlag: "/img/info/CE.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Independente",
                baseImg: "/img/info/indi.png",
                phone: "(85) 99409-9694",
                image: "/img/missionarios/3.png",
            },
            {
                id: 4,
                name: "Miss. Crizelite da Costa Siebra",
                description: "A missionária Crizelite serve ao Senhor em La Paz, na Bolívia, fazendo cultos em sua residência. Ela é enviada pela missão Maranata.",
                church: "Os cultos são realizados em sua residência, pois não há igrejas na região",
                location: "La Paz",
                city: "La Paz",
                state: "La Paz (capital administrativa)",
                stateFlag: "/img/info/LP.png",
                country: "Bolívia",
                countryFlag: "/img/info/BOL.png",
                base: "Maranata",
                baseImg: "/img/info/maranata.png",
                phone: "(88) 99713-3684",
                image: "/img/missionarios/4.png",
            },
            {
                id: 5,
                name: "Miss. Delcidio da Silva Gustavo",
                description: "O missionário Delcídio serve ao Senhor na Comunidade Nova Aliança, no município de Uiramutã, no estado de Roraima.",
                church: "",
                location: "Comunidade Nova Aliança",
                city: "Município de Uiramutã",
                state: "RR",
                stateFlag: "/img/info/RR.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Independente",
                baseImg: "/img/info/indi.png",
                phone: "(95) 99134-1656",
                image: "/img/missionarios/5.png",
            },
            {
                id: 6,
                name: "Miss. Doralice da Silva Oliveira",
                description: "A missionária Doralice serve ao Senhor na Congregação Batista Regular de Itapiranga, na cidade de Itapiranga, no estado do Amazonas.",
                church: "Congregação Batista Regular de Itapiranga",
                location: "Itapiranga",
                city: "Itapiranga",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Paulo de Tarso",
                baseImg: "/img/MBRPT.png",
                phone: "(92) 99272-6440",
                image: "/img/missionarios/6.png",
            },
            {
                id: 7,
                name: "Miss. Edilson Batalha Flores",
                description: "O missionário Edilson e sua esposa Irajane servem ao Senhor na Congregação Batista Regular de Itapiranga, na cidade de Itapiranga, no estado do Amazonas. Ele é enviado pela Agência Paulo de Tarso.",
                church: "Congregação Batista Regular de Itapiranga",
                location: "Itapiranga",
                city: "Itapiranga",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Paulo de Tarso",
                baseImg: "/img/MBRPT.png",
                phone: "(92) 99213-30388",
                image: "/img/missionarios/7.png",
            },
            {
                id: 8,
                name: "Miss. Edson Pereira de Lima",
                description: "O missionário Edson serve ao Senhor na Congregação Batista Regular Filadélfia, na cidade de Maraã, no estado do Amazonas.",
                church: "Congregação Batista Regular Filadélfia",
                location: "Maraã",
                city: "Maraã",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Independente",
                baseImg: "/img/info/indi.png",
                phone: "(97) 98405-4760",
                image: "/img/missionarios/8.png",
            },
            {
                id: 9,
                name: "Miss. Eliézer Tavares dos Santos",
                description: "O missionário Eliézer e sua esposa Girlene servem no seminário batista da Venezuela, na cidade de San Félix, no estado de Bolívar. Ele é enviado pela Agência Paulo de Tarso.",
                church: "Iglesia Bautista La Gracia de Dios",
                location: "San Félix",
                city: "San Félix",
                state: "Bolívar",
                stateFlag: "/img/info/BOLÍVAR.png",
                country: "Venezuela",
                countryFlag: "/img/info/VEN.png",
                base: "Paulo de Tarso",
                baseImg: "/img/MBRPT.png",
                phone: "(92) 98218-5513",
                image: "/img/missionarios/9.png",
            },
            {
                id: 10,
                name: "Miss. Eula Muniz Mendes",
                description: "A missionária Eula serve ao Senhor na Congregação Batista Regular Maranata, na cidade de Tefé, no estado do Amazonas. Ela é enviada pela Agência Paulo de Tarso.",
                church: "Congregação Batista Regular Maranata",
                location: "Tefé",
                city: "Tefé",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Paulo de Tarso",
                baseImg: "/img/MBRPT.png",
                phone: "(97) 99173-0870",
                image: "/img/missionarios/10.png",
            },
            {
                id: 11,
                name: "Miss. Francisco Xavier Batista",
                description: "O missionário Francisco Xavier serve ao Senhor na Igreja Batista Regular Filadélfia, na cidade de Trairi, no estado do Ceará. Ele é enviado pela missão MAB.",
                church: "Igreja Batista Regular Filadélfia",
                location: "Trairi",
                city: "Trairi",
                state: "CE",
                stateFlag: "/img/info/CE.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "MAB",
                baseImg: "/img/info/MAB.png",
                phone: "(85) 99977-8689",
                image: "/img/missionarios/11.png",
            },
            {
                id: 12,
                name: "Miss. Geraldo da Conceição Cruz Fonseca",
                description: "O missionário Geraldo serve ao Senhor na Congregação Batista Regular Elim, na cidade de Nova Jaguaribara, no estado do Ceará. Ele é enviado pela missão MAB.",
                church: "Congregação  Batista Regular Elim",
                location: "Nova Jaguaribara",
                city: "Nova Jaguaribara",
                state: "CE",
                stateFlag: "/img/info/CE.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "MAB",
                baseImg: "/img/info/MAB.png",
                phone: "(11) 98574-9712",
                image: "/img/missionarios/12.png",
            },
            {
                id: 13,
                name: "Miss. Harley das Neves Torres",
                description: "O missionário Harley serve ao Senhor na Comunidade Indígena Kapinauá, na cidade de Buíque, no estado de Pernambuco. Ele é enviado pela missão Novas Tribos.",
                church: "",
                location: "Comunidade Indígena Kapinauá",
                city: "Buíque",
                state: "PE",
                stateFlag: "/img/info/PE.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Novas Tribos",
                baseImg: "/img/info/NT.png",
                phone: "(87) 99965-4436",
                image: "/img/missionarios/13.png",
            },
            {
                id: 14,
                name: "Miss. Iloni Juraci Leuck",
                description: "A missionária Iloni serve ao Senhor na Congregação Batista Regular de Águas Claras, na cidade de Manaus, no estado do Amazonas. Ela é enviada pela missão MBBF.",
                church: "Congregação Batista Regular de Águas Claras",
                location: "Manaus",
                city: "Manaus",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "MBBF",
                baseImg: "/img/info/MBBF.png",
                phone: "(92) 99434-0258",
                image: "/img/missionarios/14.png",
            },
            {
                id: 15,
                name: "Miss. Irineu Lopes Candido",
                description: "O missionário Irineu serve ao Senhor na Igreja Batista Regular em Baturité, na cidade de Baturité, no estado do Ceará. Ele é enviado pela missão MAB.",
                church: "Igreja Batista Regular em Baturité",
                location: "Baturité",
                city: "Baturité",
                state: "CE",
                stateFlag: "/img/info/CE.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "MAB",
                baseImg: "/img/info/MAB.png",
                phone: "(88) 99967-6035",
                image: "/img/missionarios/15.png",
            },
            {
                id: 16,
                name: "Pr. Isac Mendes da Costa",
                description: "O pastor Isac serve ao Senhor na Congregação Batista Regular de Águas Claras, na cidade de Manaus, no estado do Amazonas. Ele é enviado pela Igreja Batista Regular da Graça.",
                church: "Congregação Batista Regular de Águas Claras",
                location: "Manaus",
                city: "Manaus",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Igreja Batista Regular da Graça",
                baseImg: "/img/info/logo.png",
                phone: "(92) 99458-9762",
                image: "/img/missionarios/16.png",
            },
            {
                id: 17,
                name: "Pr. Jânio Sampaio Martins Júnior",
                description: "O pastor Jânio Júnior serve ao Senhor na Congregação Batista Regular Maranata, na cidade de Anori, no estado do Amazonas. Ele é enviado pela Igreja Batista Regular da Graça.",
                church: "Congregação Batista Regular Maranata",
                location: "Anori",
                city: "Anori",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Igreja Batista Regular da Graça",
                baseImg: "/img/info/logo.png",
                phone: "(92) 99285-1029",
                image: "/img/missionarios/17.png",
            },
            {
                id: 18,
                name: "Miss. Jefferson Quevedo Soares",
                description: "O missionário Jefferson serve ao Senhor na Igreja Batista Boas Novas, na cidade de São Felipe d’Oeste, no estado de Rondônia. Ele é enviado pela missão MBBF.",
                church: "Igreja Batista Boas Novas",
                location: "São Felipe d’Oeste",
                city: "São Felipe d’Oeste",
                state: "RO",
                stateFlag: "/img/info/RO.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "MBBF",
                baseImg: "/img/info/MBBF.png",
                phone: "(41) 98781-0101",
                image: "/img/missionarios/18.png",
            },
            {
                id: 19,
                name: "Miss. José de Ribamar Melo Batista",
                description: "O missionário José de Ribamar serve ao Senhor na Congregação Batista Regular Canaã, na cidade de Cantá, no estado de Roraima. Ele é enviado pela Agência Paulo de Tarso.",
                church: "Congregação Batista Regular Canaã",
                location: "Cantá",
                city: "Cantá",
                state: "RR",
                stateFlag: "/img/info/RR.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Paulo de Tarso",
                baseImg: "/img/MBRPT.png",
                phone: "(95) 98410-2496",
                image: "/img/missionarios/19.png",
            },
            {
                id: 20,
                name: "Miss. José Fernando de Lima Junior",
                description: "O missionário José Fernando serve no seminário bautista da Venezuela, na cidade de San Félix, no estado de Bolívar. Ele é enviado pela Agência Maranata.",
                church: "Iglesia Bautista La Gracia de Dios",
                location: "San Félix",
                city: "San Félix",
                state: "Bolívar",
                stateFlag: "/img/info/BOLÍVAR.png",
                country: "Venezuela",
                countryFlag: "/img/info/VEN.png",
                base: "Maranata",
                baseImg: "/img/info/MARANATA.png",
                phone: " 58 414 - 8507739",
                image: "/img/missionarios/20.png",
            },
            {
                id: 21,
                name: "Miss. Josue da Silva Xavier",
                description: "O missionário Josue serve ao Senhor na Congregação Batista Regular Monte Sinai, localizada na Comunidade Indígena Cachoeirinha, na cidade de Boa Vista, no estado de Roraima. Ele é enviado pela Agência Paulo de Tarso.",
                church: "Congregação Batista Regular Monte Sinai",
                location: "Comunidade Indígena Cachoeirinha",
                city: "Boa Vista",
                state: "RR",
                stateFlag: "/img/info/RR.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Paulo de Tarso",
                baseImg: "/img/MBRPT.png",
                phone: "(95) 99138-4149",
                image: "/img/missionarios/21.png",
            },
            {
                id: 22,
                name: "Miss. Maria da Conceição Monteiro Lima",
                description: "A missionária Maria da Conceição serve ao Senhor na Congregação Batista Regular de Águas Claras, na cidade de Manaus, no estado do Amazonas. Ela é enviada pela Igreja Batista Regular da Graça.",
                church: "Congregação Batista Regular de Águas Claras",
                location: "Manaus",
                city: "Manaus",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Igreja Batista Regular Da Graça",
                baseImg: "/img/info/logo.png",
                phone: "(92) 99215-7226",
                image: "/img/missionarios/22.png",
            },
            {
                id: 23,
                name: "Miss. Maria das Dores Castro Pinto",
                description: "A missionária Maria das Dores atua na Congregação Batista Regular de Itapiranga, no estado do Amazonas, levando o evangelho com dedicação e cuidado pastoral à comunidade local.",
                church: "Congregação Batista Regular de Itapiranga",
                location: "Itapiranga",
                city: "Itapiranga",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Paulo de Tarso",
                baseImg: "/img/MBRPT.png",
                phone: "(92) 99218-1856",
                image: "/img/missionarios/23.png",
            },
            {
                id: 24,
                name: "Ag. Missão Batista Regular Paulo de Tarso",
                description: "A Agência Paulo de Tarso tem como missão apoiar e enviar trabalhadores para diversas regiões, promovendo a expansão do evangelho e o fortalecimento das igrejas locais.",
                church: "Igreja Batista Regulares",
                location: "Manaus",
                city: "Manaus",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Paulo de Tarso",
                baseImg: "/img/MBRPT.png",
                phone: "(92) 99117-2678",
                image: "/img/missionarios/24.png",
            },
            {
                id: 25,
                name: "Pr. Newton Magalhães de Souza",
                description: "O pastor Newton Magalhães serve na Igreja Batista Regular da Graça, em Manaus, dedicando-se ao crescimento espiritual e à edificação da igreja local.",
                church: "Igreja Batista Regular da Graça",
                location: "Manaus",
                city: "Manaus",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Igreja Batista Regular Da Graça",
                baseImg: "/img/info/logo.png",
                phone: "(92) 99345-6854",
                image: "/img/missionarios/25.png",
            },
            {
                id: 26,
                name: "Miss. Osmar Rodriques de Oliveira",
                description: "O missionário Osmar atua na Comunidade Mato Grosso, em Anamã (AM), dedicando-se ao fortalecimento da fé e ao cuidado da comunidade indígena local.",
                church: "Congregação Batista Regular Filadélfia",
                location: "Comunidade Mato Grosso",
                city: "Anamã",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Paulo de Tarso",
                baseImg: "/img/MBRPT.png",
                phone: "(92) 99239-0851",
                image: "/img/missionarios/26.png",
            },
            {
                id: 27,
                name: "Miss. Paulo Anaquiri",
                description: "O missionário Paulo serve na Congregação Batista Regular do Uarini, no Amazonas, comprometido com o ensino bíblico e o crescimento da igreja na região.",
                church: "Congregação Batista Regular do Uarini",
                location: "Uarini",
                city: "Uarini",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Paulo de Tarso",
                baseImg: "/img/MBRPT.png",
                phone: "(97) 98434-5848",
                image: "/img/missionarios/27.png",
            },
            {
                id: 28,
                name: "Miss. Pedro Ferreira Lima Júnior",
                description: "O missionário Pedro atua na Igreja Batista Regular em Itapipoca (CE), dedicando-se à evangelização e ao fortalecimento espiritual da comunidade.",
                church: "Igreja Batista Regular em Itapipoca",
                location: "Itapipoca",
                city: "Itapipoca",
                state: "CE",
                stateFlag: "/img/info/CE.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "MAB",
                baseImg: "/img/MBRPT.png",
                phone: "(88) 99624-4238",
                image: "/img/missionarios/28.png",
            },
            {
                id: 29,
                name: "Miss. Raimundo Inácio Mendes",
                description: "O missionário Raimundo serve na Congregação Batista Regular Maranata, em Tefé (AM), levando a palavra de Deus e promovendo o crescimento da igreja local.",
                church: "Congregação Batista Regular Maranata",
                location: "Tefé",
                city: "Tefé",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Paulo de Tarso",
                baseImg: "/img/MBRPT.png",
                phone: "(97) 99199-0433",
                image: "/img/missionarios/29.png",
            },
            {
                id: 30,
                name: "Miss. Raimundo Nonato Angelo da Costa",
                description: "O missionário Raimundo Nonato dedica seu ministério na Comunidade Indígena Kwatá, em Borba (AM), promovendo a fé e o desenvolvimento espiritual entre o povo local.",
                church: "Congregação Batista Regular Betel",
                location: "Comunidade Indígena Kwatá",
                city: "Borba",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Paulo de Tarso",
                baseImg: "/img/MBRPT.png",
                phone: "(92) 99322-4862",
                image: "/img/missionarios/30.png",
            },
            {
                id: 31,
                name: "Miss. Rober Guerreiro Benedito",
                description: "O missionário Rober atua na Comunidade indígena Santa Inês, em São Paulo de Olivença (AM), com foco no crescimento espiritual e fortalecimento da igreja local.",
                church: "Igreja Batista Regular Maranata",
                location: "Comunidade indígena Santa Inês",
                city: "São Paulo de Olivença",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Paulo de Tarso",
                baseImg: "/img/MBRPT.png",
                phone: "(97) 98407-7793",
                image: "/img/missionarios/31.png",
            },
            {
                id: 32,
                name: "Miss. Ronaldo Fernandes Teixeira",
                description: "O missionário Ronaldo serve na Igreja Baptista do Funchal, na Ilha da Madeira (Portugal), promovendo a mensagem do evangelho em sua comunidade.",
                church: "Igreja Baptista do Funchal",
                location: "Ilha da Madeira",
                city: "Ilha da Madeira",
                state: "Região autónoma de Portugal",
                stateFlag: "/img/info/PT.png",
                country: "Portugal",
                countryFlag: "/img/info/PT.png",
                base: "Maranata",
                baseImg: "/img/info/maranata.png",
                phone: "(85) 99689-5317",
                image: "/img/missionarios/32.png",
            },
            {
                id: 33,
                name: "Miss. Rosângela da Silva Feitosa",
                description: "A missionária Rosangela serve ao Senhor na Igreja Batista Regular em Uberaba, na cidade de Uberaba, no estado de Minas Gerais. Ela é enviada pela missão MBBF.",
                church: "Igreja Batista Regular em Uberaba",
                location: "Uberaba",
                city: "Uberaba",
                state: "MG",
                stateFlag: "/img/info/MG.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "MBBF",
                baseImg: "/img/info/MBBF.png",
                phone: "(34) 99812-0636",
                image: "/img/missionarios/33.png",
            },
            {
                id: 34,
                name: "Miss. Rozenildo de Sousa Silva",
                description: "O missionário Rozenildo atua na Igreja Batista Regular Antioquia, em Normandia (RR), servindo com dedicação à comunidade local.",
                church: "Igreja Batista Regular Antioquia",
                location: "Normandia",
                city: "Normandia",
                state: "RR",
                stateFlag: "/img/info/RR.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Paulo de Tarso",
                baseImg: "/img/MBRPT.png",
                phone: "(95) 98107-0597",
                image: "/img/missionarios/34.png",
            },
            {
                id: 35,
                name: "Miss. Severino Amaral Moreira",
                description: "O missionário Severino serve na Comunidade do Puruzinho, em Nova Olinda do Norte (AM), cuidando da igreja local e promovendo a fé cristã.",
                church: "Igreja Batista Regular em Nova Olinda do Norte",
                location: "Comunidade do Puruzinho",
                city: "Nova Olinda do Norte",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Paulo de Tarso",
                baseImg: "/img/MBRPT.png",
                phone: "(92) 99263-2016",
                image: "/img/missionarios/35.png",
            },
            {
                id: 36,
                name: "Miss. Sheila de Oliveira Sampaio",
                description: "A missionária Shelia de Olivera Sampaio serve ao Senhor na Igreja Batista Regular da Graça, na cidade de Manaus, no estado do Amazonas.",
                church: "Igreja Batista Regular da Graça",
                location: "Manaus",
                city: "Manaus",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Igreja Batista Regular da Graça",
                baseImg: "/img/info/logo.png",
                phone: "(92) 99139-4332",
                image: "/img/missionarios/36.png",
            },
            {
                id: 37,
                name: "Pr. Willian Crispim dos Santos",
                description: "O pastor Willian Crispim serve ao Senhor na Congregação Batista Regular de Éfeso, na cidade de Careiro Castanho, no estado do Amazonas. Ele é enviado pela Igreja Batista Regular da Graça.",
                church: "Congregação Batista Regular de Éfeso",
                location: "Ramal do Ivo - km22",
                city: "Careiro Castanho",
                state: "AM",
                stateFlag: "/img/info/AM.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Igreja Batista Regular da Graça",
                baseImg: "/img/info/logo.png",
                phone: "(92) 98540-5324",
                image: "/img/missionarios/37.png",
            },
            {
                id: 38,
                name: "Miss. Zacarias Caetano Magalhães",
                description: "A missionária Zacarias Caetano serve ao Senhor na Igreja Batista Regular Maranata, na cidade de Pacaraima, no estado do Roraima.",
                church: "Igreja Batista Regular Maranata",
                location: "Comunidade Indígena Araçá da Serra",
                city: "Pacaraima",
                state: "RR",
                stateFlag: "/img/info/RR.png",
                country: "Brasil",
                countryFlag: "/img/info/BR.png",
                base: "Independente",
                baseImg: "/img/info/indi.png",
                phone: "(95) 98423-9931",
                image: "/img/missionarios/38.png",
            }
        ];

        // Pagination variables
        let currentPage = 1;
        const missionariesPerPage = 6;
        let filteredMissionaries = [...missionaries];

        // Função para realizar a busca
        function performSearch(searchTerm) {
            filteredMissionaries = missionaries.filter(missionary =>
                missionary.name.toLowerCase().includes(searchTerm) ||
                missionary.location.toLowerCase().includes(searchTerm) ||
                missionary.description.toLowerCase().includes(searchTerm) ||
                missionary.city.toLowerCase().includes(searchTerm) ||
                missionary.state.toLowerCase().includes(searchTerm) ||
                missionary.country.toLowerCase().includes(searchTerm)
            );

            currentPage = 1;
            displayMissionaries(filteredMissionaries, currentPage);
            setupPagination(filteredMissionaries);
        }

        // Debounce para evitar muitas chamadas durante a digitação
        let searchTimeout;
        function debounceSearch() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const searchTerm = document.getElementById('searchMissionaryInput').value.toLowerCase();
                if (searchTerm.length === 0) {
                    // Se o campo estiver vazio, volta para a lista completa
                    filteredMissionaries = [...missionaries];
                    currentPage = 1;
                    displayMissionaries(filteredMissionaries, currentPage);
                    setupPagination(filteredMissionaries);
                } else {
                    performSearch(searchTerm);
                }
            }, 300); // 300ms de atraso
        }

        // Event listeners para busca
        document.getElementById('searchMissionaryInput').addEventListener('input', debounceSearch);

        // Mantém o botão de pesquisa funcional
        document.getElementById('searchMissionaryForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const searchTerm = document.getElementById('searchMissionaryInput').value.toLowerCase();
            performSearch(searchTerm);
        });

        // Display missionaries
        function displayMissionaries(missionariesToDisplay, page) {
            const container = document.getElementById('missionariesContainer');
            container.innerHTML = '';

            const startIndex = (page - 1) * missionariesPerPage;
            const endIndex = startIndex + missionariesPerPage;
            const paginatedMissionaries = missionariesToDisplay.slice(startIndex, endIndex);

            // Mensagem quando não há resultados
            if (paginatedMissionaries.length === 0) {
                container.innerHTML = `
                    <div class="col-span-full text-center py-12">
                        <i class="fas fa-search fa-3x text-gray-400 mb-4"></i>
                        <h3 class="text-xl font-semibold text-gray-700">Nenhum missionário encontrado</h3>
                        <p class="text-gray-500 mt-2">Tente usar termos diferentes ou verifique a ortografia</p>
                    </div>`;
                document.querySelector('.mt-12.flex.justify-center').style.display = 'none';
                return;
            } else {
                document.querySelector('.mt-12.flex.justify-center').style.display = 'flex';
            }

            paginatedMissionaries.forEach(missionary => {
                const card = document.createElement('div');
                card.className = 'missionary-card bg-white cursor-pointer';
                card.setAttribute('data-id', missionary.id);
                card.innerHTML = `
                    <div class="flex flex-col h-full">
                        <div class="missionary-image">
                            <img src="${missionary.image}" alt="${missionary.name}" class="w-full h-full object-cover">
                        </div>
                        <div class="missionary-info">
                            <h3 class="text-xl font-bold mb-3 text-gray-800 cursor-pointer hover:text-[#C2994D]" onclick="openMissionaryDetails(${missionary.id})">${missionary.name}</h3>
                            <p class="text-gray-600 mb-4 line-clamp-4">${missionary.description}</p>
                            <div class="mb-2 space-y-1 mt-auto">
                                <div id="base" class="location-info flex items-center">
                                    <img src="${missionary.baseImg}" alt="Sede de ${missionary.base}" class="" />
                                    <span class="text-gray-700">${missionary.base}</span>
                                </div>
                                <div id="local" class="location-info flex items-center">
                                    <img src="${missionary.countryFlag || missionary.stateFlag}" alt="${missionary.country || missionary.state}">
                                    <span class="text-gray-700">${missionary.city}, ${missionary.state || missionary.country}</span>
                                </div>
                            </div>
                            <div class="mt-auto">
                                <button onclick="openMissionaryDetails(${missionary.id})" 
                                    class="w-full btn-primary px-4 py-2 rounded-md font-medium flex items-center justify-center">
                                    <i class="fas fa-info-circle mr-2"></i> Ver detalhes
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                container.appendChild(card);

                // Evento de clique para o card inteiro (exceto botão)
                card.addEventListener('click', function(e) {
                    if (!e.target.closest('button')) {
                        const missionaryId = parseInt(this.getAttribute('data-id'));
                        const missionary = missionaries.find(m => m.id === missionaryId);
                        if (missionary) {
                            openMissionaryDetails(missionaryId);
                        }
                    }
                });
            });
        }

        // Setup pagination
        function setupPagination(missionariesToPaginate) {
            const pageNumbers = document.getElementById('pageNumbers');
            pageNumbers.innerHTML = '';

            const pageCount = Math.ceil(missionariesToPaginate.length / missionariesPerPage);

            for (let i = 1; i <= pageCount; i++) {
                const pageButton = document.createElement('button');
                pageButton.className = `px-4 py-2 rounded-md ${i === currentPage ? 'bg-[#A67C36] text-white' : 'bg-[#C2994D] hover:bg-[#A67C36]'} text-white`;
                pageButton.textContent = i;
                pageButton.addEventListener('click', () => {
                    currentPage = i;
                    displayMissionaries(filteredMissionaries, currentPage);
                    setupPagination(filteredMissionaries);
                    window.scrollTo({
                        top: document.getElementById('missionarios').offsetTop - 100,
                        behavior: 'smooth'
                    });
                });
                pageNumbers.appendChild(pageButton);
            }

            // Update prev/next buttons
            document.getElementById('prevPage').disabled = currentPage === 1;
            document.getElementById('nextPage').disabled = currentPage === pageCount;

            document.getElementById('prevPage').addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    displayMissionaries(filteredMissionaries, currentPage);
                    setupPagination(filteredMissionaries);
                    window.scrollTo({
                        top: document.getElementById('missionarios').offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });

            document.getElementById('nextPage').addEventListener('click', () => {
                if (currentPage < pageCount) {
                    currentPage++;
                    displayMissionaries(filteredMissionaries, currentPage);
                    setupPagination(filteredMissionaries);
                    window.scrollTo({
                        top: document.getElementById('missionarios').offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Missionary Details Modal
        window.openMissionaryDetails = function (missionaryId) {
            const modal = document.getElementById('missionaryDetailsModal');
            const missionary = missionaries.find(m => m.id === missionaryId);
            if (missionary) {
                document.getElementById('missionaryDetailsName').textContent = missionary.name;
                document.getElementById('missionaryDetailsImage').src = missionary.image;
                document.getElementById('missionaryDetailsImage').alt = missionary.name;
                document.getElementById('missionaryDetailsChurch').textContent = missionary.church;
                document.getElementById('missionaryDetailsBase').textContent = missionary.base;
                document.getElementById('missionaryDetailsBaseImg').src = missionary.baseImg;
                document.getElementById('missionaryDetailsBaseImg').alt = missionary.base;
                document.getElementById('missionaryDetailsCity').textContent = missionary.city;
                document.getElementById('missionaryDetailsState').textContent = missionary.state;
                document.getElementById('missionaryDetailsStateFlag').src = missionary.stateFlag;
                document.getElementById('missionaryDetailsStateFlag').alt = missionary.state;
                document.getElementById('missionaryDetailsCountry').textContent = missionary.country;
                document.getElementById('missionaryDetailsCountryFlag').src = missionary.countryFlag;
                document.getElementById('missionaryDetailsCountryFlag').alt = missionary.country;
                document.getElementById('missionaryDetailsLocation').textContent = missionary.location;
                document.getElementById('missionaryDetailsPhone').textContent = missionary.phone;
                document.getElementById('missionaryDetailsDescription').textContent = missionary.description;

                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        };

        function closeMissionaryDetailsModal() {
            const modal = document.getElementById('missionaryDetailsModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        document.getElementById('closeMissionaryDetailsModal').addEventListener('click', closeMissionaryDetailsModal);

        // Close modal when clicking outside
        document.getElementById('missionaryDetailsModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('missionaryDetailsModal')) {
                closeMissionaryDetailsModal();
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            displayMissionaries(filteredMissionaries, currentPage);
            setupPagination(filteredMissionaries);
        });