const faculdades = [
    // a partir de agora está com as coisas do Allan.
    
    {
        nome: 'UNDF',
        notaCorte: 787.08,
        vagas: 48,
        pesos: { redacao: 2, natureza: 4, humanidades: 2, linguagens: 4, matematica: 3 },
        pesos_numeros: [2, 2, 4, 3, 4],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 2 + 4 + 2 + 4 + 3,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 48 candidatos<br>"+
        "Corte Ch Regular AC</u>: 793,32 <br><br>"+
        "<u><b>2ª/3ª Ch. AC:</u></b> 22 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 784,81<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 787,08"
    },

 {
        nome: 'UFMG',
        notaCorte: 813.1,
        vagas: 160,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 160 candidatos<br>"+
        "Corte Ch Regular AC</u>: 812.80<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 50 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 808,07<br><br>"+
        "<u><b>3ª Ch. AC:</u></b> 16 candidatos<br>"+
        "Corte 3ª Ch AC</u>: 804,78<br><br>"+
        "<u><b>4ª Ch. AC:</u></b> 12 candidatos<br>"+
        "Corte 4ª Ch AC</u>: 802,70<br><br>"+
        "<u><b>5ª Ch. AC:</u></b> 4 candidatos<br>"+
        "Corte 5ª Ch AC</u>: 802,10<br><br>"+
        "<u><b>6ª Ch. AC:</u></b> 14 candidatos<br>"+
        "Corte 6ª Ch AC</u>: 799,76<br><br>"+
        "<u><b>7ª Ch. AC:</u></b> 1 candidatos<br>"+
        "Corte 7ª Ch AC</u>: 799,68<br><br>"+
        "<u><b>8ª Ch. AC:</u></b> 3 candidatos<br>"+
        "Corte 8ª Ch AC</u>: 799,44<br><br>"+
        "<u><b>9ª Ch. AC:</u></b> 5 candidatos<br>"+
        "Corte 9ª Ch AC</u>: 797,82<br><br>"+
        "<u><b>10ª Ch. AC:</u></b> 1 candidatos<br>"+
        "Corte 10ª Ch AC</u>: 797,50...<br>"+
        "<br>Nota final de Corte: 797,22 AC"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 813.1"
    },
 { 
        nome: 'FURG', 
        notaCorte: 799.08, 
        vagas: 40,
        pesos: { redacao: 3, natureza: 2, humanidades: 2, linguagens: 2, matematica: 1 },
        pesos_numeros: [2, 2, 2, 1, 3],//não esquecer de colocar os pesos na ordem L H N M R
        somapesos: 3 + 2 + 2 + 2 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 40 candidatos<br>"+
        "Corte Ch Regular AC</u>: 803.23<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 10 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 802,18<br><br>"+
        "<u><b>3ª Ch. AC:</u></b> 2 candidatos<br>"+
        "Corte 3ª Ch AC: 802,09<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 799,08"
    },
    { 
        nome: 'UEFS', 
        notaCorte: 776.41, 
        vagas: 15,
        pesos: { redacao: 4, natureza: 5, humanidades: 3, linguagens: 5, matematica: 3 },
        pesos_numeros: [5, 3, 5, 3, 4],//não esquecer de colocar os pesos na ordem L H N M R
        somapesos: 5+3+4+4+3,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 15 candidatos<br>"+
        "Corte Ch Regular AC</u>: 780,21<br><br>"+
        "<u><b>Outras chamadas:<br></b></u>"+
        "Foi até a 5ª. Não encontrado o número de candidatos<br><br>"+
        "Corte final: 777.46<br>"+
        "<br><u><b>Chamadas finalizadas</u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 776.41"
    },
    { 
        nome: 'UEM', 
        notaCorte: 822.62, 
        vagas: 4,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],//não esquecer de colocar os pesos na ordem L H N M R
        somapesos: 1+1+1+1+1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 4 candidatos<br>"+
        "Corte Ch Regular AC</u>: 813,78<br><br>"+
        "<u><b>Outras chamadas:<br></b></u>"+
        "Foi até a 3ª. Não encontrado o número de candidatos<br><br>"+
        "Corte final: 798,92 - Candidata havia ficado em 9º na classificação e ficou em 2ª na Lista de Espera.<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 822,62"
    },
    { 
        nome: 'UEMG', 
        notaCorte: 797.56, 
        vagas: 11,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],//não esquecer de colocar os pesos na ordem L H N M R
        somapesos: 1+1+1+1+1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 11 candidatos<br>"+
        "Corte Ch Regular AC</u>: 795,24<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 7 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 792,72<br><br>"+
        "<u><b>3ª Ch. AC:</u></b> 1 candidato<br>"+
        "Corte 3ª Ch AC: 792,28<br><br>"+
        "<u><b>4ª Ch. AC:</u></b> 1 candidato<br>"+
        "Corte 4ª Ch AC: 792,14<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 797,56"
    },
    { 
        nome: 'UEMS', 
        notaCorte: 811.65,
        vagas: 13,
        pesos: { redacao: 3, natureza: 4, humanidades: 1, linguagens: 1, matematica: 2 },
        pesos_numeros: [3, 1, 4, 2, 1],//não esquecer de colocar os pesos na ordem L H N M R
        somapesos: 3+4+1+1+2,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 13 candidatos<br>"+
        "Corte Ch Regular AC</u>: 826.28<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 2 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 825,84<br><br>"+
        "<u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 811,65"
    },
    {
        nome: 'UERN (Mossoró) *BONIFICAÇÃO',
        notaCorte: 785.23,
        vagas: 26,
        pesos: { redacao: 3, natureza: 3, humanidades: 1, linguagens: 3, matematica: 1 },
        pesos_numeros: [3, 1, 3, 1, 3],  // Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 3 + 1 + 3 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 26 candidatos<br>"+
        "Corte Ch Regular AC</u>: 874.50<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 3 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 873,94<br><br>"+
        "<u><b>Chamadas finalizadas</b></u><br>"+
        "Não peguei as notas SEM bonificação<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 785,23"
    },
    {
        nome: 'UESB - Jequié',
        notaCorte: 787.23,
        vagas: 6,
        pesos: { redacao: 5, natureza: 4, humanidades: 2, linguagens: 5, matematica: 2 },
        pesos_numeros: [5, 2, 4, 2, 5],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 5 + 4 + 2 + 5 + 2,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 787.23"
    },
    {
        nome: 'UESB - Vitória da C.',
        notaCorte: 786.01,
        vagas: 7,
        pesos: { redacao: 5, natureza: 4, humanidades: 2, linguagens: 5, matematica: 2 },
        pesos_numeros: [5, 2, 4, 2, 5],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 5 + 4 + 2 + 5 + 2,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 7 candidatos<br>"+
        "Corte Ch Regular AC</u>: 798.28<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> Não encontrado<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 786,01"
    },
    {
        nome: 'UESC',
        notaCorte:785.9,
        vagas: 20,
        pesos: { redacao: 5, natureza: 4, humanidades: 2, linguagens: 5, matematica: 2 },
        pesos_numeros: [5, 2, 4, 2, 5],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 5 + 2 + 3 + 2 + 5,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 20 candidatos<br>"+
        "Corte Ch Regular AC</u>: 792.82<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> Não encontrado<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 785,9"
    },
    {
        nome: 'UESPI - Eram 2 SISUS',
        notaCorte: 789.35,
        vagas: 24,
        pesos: { redacao: 3, natureza: 5, humanidades: 2, linguagens: 5, matematica: 3 },
        pesos_numeros: [5, 2, 5, 3, 3],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 5 + 2 + 5 + 3,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 24 candidatos<br>"+
        "Corte Ch Regular AC</u>: 790,40<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 2 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 789,37<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 789.35"
    },
    {
        nome: 'UFAC',
        notaCorte: 857.98,
        vagas: 38,
        pesos: { redacao: 2, natureza: 3, humanidades: 1, linguagens: 2, matematica: 1 },
        pesos_numeros: [2, 1, 3, 1, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 2 + 3 + 1 + 2 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 857.98"
    },
    {
        nome: 'UFAL - Arapiraca - Com Bonificação',
        notaCorte: 786.36,
        vagas: 30,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],  // Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 30 candidatos<br>"+
        "Corte Ch Regular AC</u>: 773,50<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 3 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 771,78<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 786,36"
    },
    {
        nome: 'UFAL - Maceió',
        notaCorte: 788.1,
        vagas: 50,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 788.1"
    },
    {
        nome: 'UFAM *BONIFICAÇÃO',
        notaCorte: 775.99,
        vagas: 25,
        pesos: { redacao: 2, natureza: 2, humanidades: 1, linguagens: 2, matematica: 1 },
        pesos_numeros: [2, 1, 2, 1, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 2 + 2 + 1 + 2 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 25 candidatos<br>"+
        "Corte Ch Regular AC</u>: 926.63<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 8 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 921,23<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "Não peguei as notas SEM bonificação<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 775,99"
    },
    {
        nome: 'UFBA - Salvador - 2 SISUs',
        notaCorte: 781.18,
        vagas: 46,
        pesos: { redacao: 3, natureza: 4, humanidades: 3, linguagens: 3, matematica: 2 },
        pesos_numeros: [3, 3, 4, 2, 3],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 4 + 3 + 3 + 2,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 46 candidatos<br>"+
        "Corte Ch Regular AC</u>: 792.57<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 9 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 784,57<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 781,18"
    },
    {
        nome: 'UFBA - VCA',
        notaCorte:776.02,
        vagas: 15,
        pesos: { redacao: 3, natureza: 4, humanidades: 3, linguagens: 3, matematica: 2 },
        pesos_numeros: [3, 3, 4, 2, 3],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 4 + 3 + 3 + 2,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 15 candidatos<br>"+
        "Corte Ch Regular AC</u>: 938.25<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 1 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 935,38<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 776,02"
    },
    {
        nome: 'UFC - Fortaleza',
        notaCorte: 803.22,
        vagas: 80,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 80 candidatos<br>"+
        "Corte Ch Regular AC</u>: 804.76<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 7 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 802<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 803,22"
    },
    {
        nome: 'UFC - Sobral',
        notaCorte: 798,
        vagas: 40,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas:  "<br><u><b>Ch. Regular AC:</u></b> 40 candidatos<br>"+
        "Corte Ch Regular AC</u>: 801.32<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 5 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 798,22<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 798"
    },
    {
        nome: 'UFCA',
        notaCorte: 781.14,
        vagas: 40,
        pesos: { redacao: 2, natureza: 3, humanidades: 1.5, linguagens: 2, matematica: 1.5 },
        pesos_numeros: [2, 1.5, 3, 1.5, 1],  // Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 2+1.5+3+1.5+1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 40 candidatos<br>"+
        "Corte Ch Regular AC</u>: 791.62<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> Quantidade de candidatos não encontrado<br>"+
        "Corte 2ª Ch AC</u>: 790.35<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 781,14"
    },
    {
        nome: 'UFCAT',
        notaCorte: 781.17,
        vagas: 13,
        pesos: { redacao: 4, natureza: 6, humanidades: 3, linguagens: 4, matematica: 3 },
        pesos_numeros: [4, 3, 6, 3, 4],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 4 + 6 + 3 + 4 + 3,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 40 candidatos<br>"+
        "Corte Ch Regular AC</u>: 791.62<br>"+
        "<br><u><b>Outras chamadas não encontradas</b></u><br>"
    },
    {
        nome: 'UFCG - Cajazeiras',
        notaCorte: 787,
        vagas: 13,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 13 candidatos<br>"+
        "Corte Ch Regular AC</u>: 869.57<br><br>"+
        "<br><u><b>Outras chamadas não encontradas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 787"
    },
    {
        nome: 'UFCG - Campina Grande',
        notaCorte: 792.76,
        vagas: 45,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 45 candidatos<br>"+
        "Corte Ch Regular AC</u>: 832.73<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 1 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 832,71<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 792,76"
    },
    {
        nome: 'UFCSPA',
        notaCorte: 801.68,
        vagas: 50,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 50 candidatos<br>"+
        "Corte Ch Regular AC</u>: 805.66<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> Não encontrado o nº de candidatos<br>"+
        "Corte 2ª Ch AC</u>: 796,06<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 801,68"
    },
    {
        nome: 'UFDPAR',
        notaCorte: 782.94,
        vagas: 39,
        pesos: { redacao: 3, natureza: 5, humanidades: 2, linguagens: 5, matematica: 4 },
        pesos_numeros: [3, 2, 5, 4, 5],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 5 + 2 + 5 + 4,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 39 candidatos<br>"+
        "Corte Ch Regular AC</u>: 791,44<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 3 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 791,12<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 782,94"
    },
    {
        nome: 'UFERSA',
        notaCorte: 765.74,
        vagas: 22,
        pesos: { redacao: 3, natureza: 7, humanidades: 4, linguagens: 4, matematica: 2 },
        pesos_numeros: [3, 4, 7, 2, 4],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 7 + 4 + 4 + 2,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 765.74"
    },
    {
        nome: 'UFES - 2 SISUs',
        notaCorte: 807.82,
        vagas: 40,
        pesos: { redacao: 4, natureza: 4, humanidades: 2, linguagens: 3, matematica: 2 },
        pesos_numeros: [4, 2, 4, 2, 3],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 4 + 4 + 2 + 3 + 2,
        chamadas:"<br><u><b>Ch. Regular AC:</u></b> 40 candidatos<br>"+
        "Corte Ch Regular AC</u>: 807.98<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 5 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 806,36<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 807,8"
    },
    {
        nome: 'UFF',
        notaCorte: 804.17,
        vagas: 90,
        pesos: { redacao: 3, natureza: 3, humanidades: 1, linguagens: 2, matematica: 1 },
        pesos_numeros: [3, 1, 3, 1, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 3 + 1 + 2 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 90 candidatos<br>"+
        "Corte Ch Regular AC</u>: 812,55<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 4 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 812,11<br>"+
        "<u><b>3ª Ch. AC:</u></b> 2 candidatos<br>"+
        "Corte 3ª Ch AC</u>: 811,78<br>"+
        "<u><b>4ª Ch. AC:</u></b> 1 candidatos<br>"+
        "Corte 5ª Ch AC</u>: 811,37<br>"+
        "<u><b>5ª Ch. AC:</u></b> 1 candidatos<br>"+
        "Corte 5ª Ch AC</u>: 811,23<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 804,17"
    },
    {
        nome: 'UFFS - Chapecó',
        notaCorte: 791.92,
        vagas: 5,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 791.92"
    },
    {
        nome: 'UFFS - Passo Fundo Aranguá',
        notaCorte: 793.98,
        vagas: 5,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 793,98"
    },
    {
        nome: 'UFG',
        notaCorte: 796.07,
        vagas: 55,
        pesos: { redacao: 4, natureza: 6, humanidades: 3, linguagens: 4, matematica: 3 },
        pesos_numeros: [4, 3, 6, 3, 4],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 4 + 6 + 3 + 4 + 3,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 55 candidatos<br>"+
        "Corte Ch Regular AC</u>: 805.10<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 10 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 802,31<br>"+
        "<u><b>3ª Ch. AC:</u></b> 1 candidatos<br>"+
        "Corte 3ª Ch AC</u>: 802,22<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 796,07"
    },
    {
        nome: 'UFGD',
        notaCorte: 795.82,
        vagas: 19,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 795,82"
    },
    {
        nome: 'UFJ',
        notaCorte: 783.45,
        vagas: 30,
        pesos: { redacao: 4, natureza: 6, humanidades: 3, linguagens: 4, matematica: 3 },
        pesos_numeros: [4, 3, 6, 3, 4],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 4 + 6 + 3 + 4 + 3,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 30 candidatos<br>"+
        "Corte Ch Regular AC</u>: 790,8<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 1 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 790,77<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 783,45"
    },
    {
        nome: 'UFJF - Gov Valadares',
        notaCorte: 792.94,
        vagas: 25,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
         "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 792,94"
    },
    {
        nome: 'UFJF - Juiz de Fora',
        notaCorte: 800.86,
        vagas: 45,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 800.8"
    },
    {
        nome: 'UFLA',
        notaCorte: 796.5,
        vagas: 21,
        pesos: { redacao: 2, natureza: 2, humanidades: 2, linguagens: 2, matematica: 2 },
        pesos_numeros: [2, 2, 2, 2, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 2 + 2 + 2 + 2 + 2,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 796,5"
    },
    {
        nome: 'UFMA - Imperatriz',
        notaCorte: 780.34,
        vagas: 40,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 780,34"
    },
    {
        nome: 'UFMA - Pinheiro',
        notaCorte: 778.54,
        vagas: 50,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 778,54"
    },
    {
        nome: 'UFMA- São Luís',
        notaCorte: 794.56,
        vagas: 50,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 50 candidatos<br>"+
        "Corte Ch Regular AC</u>: 791.90<br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 5 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 789,98<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 794,56"
    },
   
    {
        nome: 'UFMS - Campo Grande',
        notaCorte: 795.22,
        vagas: 3,
        pesos: { redacao: 2, natureza: 3, humanidades: 2, linguagens: 2, matematica: 1 },
        pesos_numeros: [2, 2, 3, 1, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 2 + 3 + 2 + 2 + 1,
        chamadas:  "<br><u><b>Ch. Regular AC:</u></b> 3 candidatos<br>"+
        "Corte Ch Regular AC</u>: 807.75 <br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 1 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 790,14<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 795.22"
    },
    {
        nome: 'UFMS - Três Lagoas',
        notaCorte: 771.32,
        vagas: 1,
        pesos: { redacao: 2, natureza: 3, humanidades: 2, linguagens: 2, matematica: 1 },
        pesos_numeros: [2, 2, 3, 1, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 2 + 3 + 2 + 2 + 1,
        chamadas: "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 771,32"
    },
    {
        nome: 'UFMT - Cuiabá',
        notaCorte: 786.66,
        vagas: 40,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 40 candidatos<br>"+
        "Corte Ch Regular AC</u>: 783.26 <br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 3 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 777,12<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 786.66"
    },
    {
        nome: 'UFMT - Sinop',
        notaCorte: 781.66,
        vagas: 30,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 30 candidatos<br>"+
        "Corte Ch Regular AC</u>: 775 <br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 1 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 773,98<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 781.66"
    },
    {
        nome: 'UFNT',
        notaCorte: 777.39,
        vagas: 1,
        pesos: { redacao: 3, natureza: 4, humanidades: 2, linguagens: 3, matematica: 2 },
        pesos_numeros: [3, 2, 4, 2, 3],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 4 + 2 + 3 + 2,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"
        +"<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 777,39"
    },
    {
        nome: 'UFOB',
        notaCorte: 784.58,
        vagas: 12,
        pesos: { redacao: 5, natureza: 5, humanidades: 2, linguagens: 4, matematica: 2 },
        pesos_numeros: [5, 2, 5, 2, 4],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 5 + 5 + 2 + 4 + 2,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 784,58"
    },
    {
        nome: 'UFOP',
        notaCorte: 808.23,
        vagas: 40,
        pesos: { redacao: 2, natureza: 2, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [2, 1, 2, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 2 + 2 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 808,23"
    },
    {
        nome: 'UFPB com Bonificação',
        notaCorte: 796.08,
        vagas: 65,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
         "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 796,08"
    },
    {
        nome: 'UFPE - Caruaru',
        notaCorte: 791.34,
        vagas: 40,
        pesos: { redacao: 5, natureza: 5, humanidades: 4, linguagens: 3, matematica: 3 },
        pesos_numeros: [5, 4, 5, 3, 3],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 5 + 5 + 4 + 3 + 3,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
         "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 791,34"
    },
    {
        nome: 'UFPE - Recife*',// AS NOTAS DA CARTILHA NAO BATEM COM AS DO PESO.
        notaCorte: 793.59,
        vagas: 70,
        pesos: { redacao: 2, natureza: 3, humanidades: 1, linguagens: 2, matematica: 2 },
        pesos_numeros: [2, 1, 3, 2, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 2 + 3 + 1 + 2 + 2,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 70 candidatos<br>"+
        "Corte Ch Regular AC</u>: 788,87 <br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 6 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 787,49<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 793,59"
    },
    {
        nome: 'UFPEL',
        notaCorte: 792.78,
        vagas: 40,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 70 candidatos<br>"+
        "Corte Ch Regular AC</u>: 797.04 <br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 8 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 796,10<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 792,78"
    },
    {
        nome: 'UFPI - Picos',
        notaCorte: 777.09,
        vagas: 12,
        pesos: { redacao: 3, natureza: 5, humanidades: 2, linguagens: 5, matematica: 4 },
        pesos_numeros: [3, 2, 5, 4, 5],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 5 + 2 + 5 + 4,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 12 candidatos<br>"+
        "Corte Ch Regular AC</u>: 788.93 <br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 1 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 788,84<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 777,09"
    },
    {
        nome: 'UFPI - Teresina',
        notaCorte: 802.14,
        vagas: 39,
        pesos: { redacao: 3, natureza: 5, humanidades: 2, linguagens: 5, matematica: 4 },
        pesos_numeros: [3, 2, 5, 4, 5],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 5 + 2 + 5 + 4,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 39 candidatos<br>"+
        "Corte Ch Regular AC</u>: 805.65 <br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 3 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 798,75<br>"+
        "<u><b>3ª Ch. AC:</u></b> 1 candidatos<br>"+
        "Corte 3ª Ch AC</u>: 792,85<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 802,14"
    },
    {
        nome: 'UFPR - Curitiba',
        notaCorte: 812.1,
        vagas: 19,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado" +
         "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 812,1"
    },
    {
        nome: 'UFPR - Toledo',
        notaCorte: 805.24,
        vagas: 3,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado"+
         "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 805,24"
    },

    {
        nome: 'UFRB',
        notaCorte: 784.36,
        vagas: 25,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 784,36"
    },
    {
        nome: 'UFRGS',
        notaCorte: 787.27,
        vagas: 21,
        pesos: { redacao: 2, natureza: 2, humanidades: 2, linguagens: 3, matematica: 1 },
        pesos_numeros: [2, 2, 2, 1, 3],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 2 + 2 + 2 + 3 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 21 candidatos<br>"+
        "Corte Ch Regular AC</u>: 793.23 <br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 2 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 789,81<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 787,27"
    },
    {
        nome: 'UFRJ - Macaé',
        notaCorte: 806.8,
        vagas: 30,
        pesos: { redacao: 3, natureza: 2, humanidades: 1, linguagens: 2, matematica: 1 },
        pesos_numeros: [3, 1, 2, 1, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 2 + 1 + 2 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 806,8"
    },
    {
        nome: 'UFRJ - Rio de Janeiro',
        notaCorte: 824.22,
        vagas: 100,
        pesos: { redacao: 4, natureza: 4, humanidades: 1, linguagens: 2, matematica: 2 },
        pesos_numeros: [4, 1, 4, 2, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 4 + 4 + 1 + 2 + 2,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 100 candidatos<br>"+
        "Corte Ch Regular AC</u>: 831,87 <br><br>"+
        "<u><b>2ª,3ª,4ª... Ch. AC:</u></b> 49 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 818,28<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 824.22"
    },
    {
        nome: 'UFRN - Caicó *BONIFICAÇÃO',
        notaCorte: 773.26,
        vagas: 19,
        pesos: { redacao: 3, natureza: 6, humanidades: 3, linguagens: 3, matematica: 2 },
        pesos_numeros: [3, 3, 6, 2, 3],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 6 + 3 + 3 + 2,
        chamadas:  "<br><u><b>Ch. Regular AC:</u></b> 19 candidatos<br>"+
        "Corte Ch Regular AC</u>: 927,63 COM BÔNUS e 773,02 SEM BÔNUS <br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 1 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 925,89 COM BÔNUS e 771,58 SEM BÔNUS<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 773,26"
    },
    {
        nome: 'UFRN - Natal',
        notaCorte: 782.87,
        vagas: 49,
        pesos: { redacao: 3, natureza: 6, humanidades: 3, linguagens: 3, matematica: 2 },
        pesos_numeros: [3, 3, 6, 2, 3],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 6 + 3 + 3 + 2,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 782,87"
    },
    {
        nome: 'UFRR',
        notaCorte: 774.66,
        vagas: 4,
        pesos: { redacao: 1, natureza: 3, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 3, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 3 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 774,66"
    },
    {
        nome: 'UFS - Aracaju *BONIFICAÇÃO',
        notaCorte: 787.44,
        vagas: 49,
        pesos: { redacao: 4, natureza: 7, humanidades: 2, linguagens: 4, matematica: 3 },
        pesos_numeros: [4, 2, 7, 3, 4],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 4 + 7 + 2 + 4 + 3,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 49 candidatos<br>"+
        "Corte Ch Regular AC</u>: 798,45 <br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 1 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 795,74 COM BÔNUS e 771,58 SEM BÔNUS<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 787,44"
    },
    {
        nome: 'UFS - Lagarto',
        notaCorte: 783.61,
        vagas: 28,
        pesos: { redacao: 4, natureza: 7, humanidades: 2, linguagens: 4, matematica: 3 },
        pesos_numeros: [4, 2, 7, 3, 4],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 4 + 7 + 2 + 4 + 3,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 28 candidatos<br>"+
        "Corte Ch Regular AC</u>: 792,70 <br><br>"+
        "<u><b>2ª Ch. AC:</u></b> 5 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 792,45<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 783,61"
    },
    {
        nome: 'UFSB',
        notaCorte: 801.5,
        vagas: 7,
        pesos: { redacao: 5, natureza: 5, humanidades: 2, linguagens: 3, matematica: 4 },
        pesos_numeros: [3, 2, 5, 4, 5],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 2 + 5 + 4 + 5,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
         "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 801,5"
    },
    {
        nome: 'UFSC - Araranguá',
        notaCorte: 807.73,
        vagas: 7,
        pesos: { redacao: 3, natureza: 2, humanidades: 2, linguagens: 2, matematica: 2 },
        pesos_numeros: [3, 2, 2, 2, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 2 + 2 + 2 + 2,
        chamadas:  "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 807,73"
    },
    {
        nome: 'UFSC - Florianópolis',
        notaCorte: 820.98,
        vagas: 13,
        pesos: { redacao: 3, natureza: 2, humanidades: 2, linguagens: 2, matematica: 2 },
        pesos_numeros: [3, 2, 2, 2, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 2 + 2 + 2 + 2,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 13 candidatos<br>"+
        "Corte Ch Regular AC</u>: 823,84 <br><br>"+
        "<u><b>2ª/3ª/4ª/5ª Ch. AC:</u></b> 4 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 817,58<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 820,98"
    },
    {
        nome: 'UFSCar',
        notaCorte: 805.71,
        vagas: 22,
        pesos: { redacao: 2, natureza: 2, humanidades: 1, linguagens: 2, matematica: 1 },
        pesos_numeros: [2, 1, 2, 1, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 2 + 2 + 1 + 2 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 22 candidatos<br>"+
        "Corte Ch Regular AC</u>: 812,23 <br><br>"+
        "<u><b>2ª/3ª Ch. AC:</u></b> ? candidatos<br>"+
        "Corte 2ª Ch AC</u>: 799,65<br>"+
        "RODOU MUITO"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 805,71"
    },
    {
        nome: 'UFSJ - Divinópolis',
        notaCorte: 789.6,
        vagas: 30,
        pesos: { redacao: 2, natureza: 2, humanidades: 1, linguagens: 2, matematica: 1 },
        pesos_numeros: [2, 1, 2, 1, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 2 + 2 + 1 + 2 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 789,6"
    },
    {
        nome: 'UFSJ - São João del Rei',
        notaCorte: 784.49,
        vagas: 20,
        pesos: { redacao: 2, natureza: 2, humanidades: 1, linguagens: 2, matematica: 1 },
        pesos_numeros: [2, 1, 2, 1, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 2 + 2 + 1 + 2 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 784,49"
    },
    {
        nome: 'UFSM',
        notaCorte: 795.64,
        vagas: 42,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 795,64"
    },
    {
        nome: 'UFT',
        notaCorte: 789.84,
        vagas: 5,
        pesos: { redacao: 3, natureza: 4, humanidades: 2, linguagens: 3, matematica: 2 },
        pesos_numeros: [3, 2, 4, 2, 3],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 4 + 2 + 3 + 2,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 789,84"
    },
    {
        nome: 'UFTM',
        notaCorte: 819.75,
        vagas: 22,
        pesos: { redacao: 3, natureza: 3, humanidades: 2, linguagens: 2, matematica: 3 },
        pesos_numeros: [3, 2, 3, 3, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 3 + 2 + 2 + 3,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 819,75"
    },
    {
        nome: 'UFU',
        notaCorte: 795.58,
        vagas: 30,
        pesos: { redacao: 1, natureza: 2, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 2, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 2 + 1 + 1 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 30 candidatos<br>"+
        "Corte Ch Regular AC</u>: 803.22 <br><br>"+
        "<u><b>2ª/3ª Ch. AC:</u></b> 13 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 796,88<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 795,58"
    },
    {
        nome: 'UFV',
        notaCorte: 796.68,
        vagas: 25,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 796,68"
    },
    {
        nome: 'UFVJM - Diamantina',
        notaCorte: 795.39,
        vagas: 22,
        pesos: { redacao: 3, natureza: 3, humanidades: 2, linguagens: 2, matematica: 2 },
        pesos_numeros: [3, 2, 3, 2, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 3 + 2 + 2 + 2,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 795,39"
    },
    {
        nome: 'UFVJM - Teófilo Otoni',
        notaCorte: 796.59,
        vagas: 22,
        pesos: { redacao: 3, natureza: 3, humanidades: 2, linguagens: 2, matematica: 2 },
        pesos_numeros: [3, 2, 3, 2, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 3 + 2 + 2 + 2,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 796,59"
    },
    {
        nome: 'UNCISAL',
        notaCorte: 813.96,
        vagas: 25,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 813,96"
    },
     {
        nome: 'UNEMAT',
        notaCorte: 781.77,
        vagas: 12,
        pesos: { redacao: 3, natureza: 4, humanidades: 3, linguagens: 3, matematica: 2 },
        pesos_numeros: [3, 3, 4, 2, 3],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 4 + 3 + 3 + 2,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 12 candidatos<br>"+
        "Corte Ch Regular AC</u>: 782,68 <br><br>"+
        "<u><b>2ª/3ª Ch. AC:</u></b> 6 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 781,09<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 781,77"
    },
    {
        nome: 'Unifal',
        notaCorte: 801.49,
        vagas: 30,
        pesos: { redacao: 3, natureza: 3, humanidades: 2, linguagens: 2, matematica: 2 },
        pesos_numeros: [3, 2, 3, 2, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 3 + 2 + 2 + 2,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 30 candidatos<br>"+
        "Corte Ch Regular AC</u>: 805.83 <br><br>"+
        "<u><b>2ª/3ª/4ª/5ª/6ª Ch. AC:</u></b> 12 candidatos<br>"+
        "Corte 2ª Ch AC</u>: 804,34<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 801,49"
    },
    {
        nome: 'UNILA',
        notaCorte: 792.68,
        vagas: 15,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 792,68"
    },
    {
        nome: 'UNIMONTES',
        notaCorte: 788.27,
        vagas: 16,
        pesos: { redacao: 2, natureza: 2, humanidades: 2, linguagens: 2, matematica: 1 },
        pesos_numeros: [2, 2, 2, 1, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 2 + 2 + 2 + 2 + 1,
        chamadas: "As informações disponibilizadas pelo inep não batem com as das cartilhas das turmas.<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 788,27"
    },
    // {
    //     nome: 'UNIOESTE - Cascavel',
    //     notaCorte: 796.67,
    //     vagas: 10,
    //     pesos: { redacao: 3, natureza: 3, humanidades: 2, linguagens: 2, matematica: 2 },
    //     pesos_numeros: [3, 2, 3, 2, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
    //     somapesos: 3 + 3 + 2 + 2 + 2,
    //     chamadas: "<br><u><b>Ch. Regular AC:</u></b> 10 candidatos<br>"+
    //     "Corte Ch Regular AC</u>: 812,63 <br><br>"+
    //     "<u><b>2ª Ch. AC:</u></b> 2 candidatos<br>"+
    //     "Corte 2ª Ch AC</u>: 796,67<br>"+
    //     "<br><u><b>Chamadas finalizadas</b></u><br>"
    //     //"<br><b>PARCIAIS SISU 2025:</b><br>"+
    //     //"Corte 1ª Parcial = XXX"
    // },
    // {
    //     nome: 'UNIOESTE - FB',
    //     notaCorte: 801.74,
    //     vagas: 10,
    //     pesos: { redacao: 3, natureza: 3, humanidades: 2, linguagens: 2, matematica: 2 },
    //     pesos_numeros: [3, 2, 3, 2, 2],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
    //     somapesos: 3 + 3 + 2 + 2 + 2,
    //     chamadas: "<br><u><b>Ch. Regular AC:</u></b> 10 candidatos<br>"+
    //     "Corte Ch Regular AC</u>: 806,45 <br><br>"+
    //     "<u><b>4ª Ch. AC:</u></b> 2 candidatos<br>"+
    //     "Corte 4ª Ch AC</u>: 801,74<br>"+
    //     "<br><u><b>Chamadas finalizadas</b></u><br>"
    //     //"<br><b>PARCIAIS SISU 2025:</b><br>"+
    //     //"Corte 1ª Parcial = XXX"
    // },
    {
        nome: 'UNIPAMPA',
        notaCorte: 788.84,
        vagas: 28,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas:"<br><u><b>Ch. Regular AC:</u></b> 28 candidatos<br>"+
        "Corte Ch Regular AC</u>: 791.20 <br><br>"+
        "<u><b>2ª/3ª Ch. AC:</u></b> 7 candidatos<br>"+
        "Corte 2ª/3ª Ch. AC:</u>: 789,9<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 788,84"
    },
    {
        nome: 'UNIRIO',
        notaCorte: 790.95,
        vagas: 70,
        pesos: { redacao: 3, natureza: 3, humanidades: 2, linguagens: 3, matematica: 2 },
        pesos_numeros: [3, 2, 3, 2, 3],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 3 + 3 + 2 + 3 + 2,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 28 candidatos<br>"+
        "Corte Ch Regular AC</u>: 791,20 <br><br>"+
        "<u><b>2ª/3ª Ch. AC:</u></b> 5 candidatos<br>"+
        "Corte 2ª/3ª Ch. AC:</u>: 796,65<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 790,95"
    },
    {
        nome: 'UNIVASF - Paulo Afonso',
        notaCorte: 781.06,
        vagas: 5,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<strong>Outras chamadas:</strong> Não encontrado<br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 781,06"
    },
    {
        nome: 'UNIVASF - Petrolina COM BONIFICAÇÃO',
        notaCorte: 780.1,
        vagas: 21,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 28 candidatos<br>"+
        "Corte Ch Regular AC</u>: 860.33 COM BONIFICAÇÃO e 782,12 SEM BONIFICAÇÃO <br><br>"+
        "<u><b>2ª/3ª Ch. AC:</u></b> 1 candidatos<br>"+
        "Corte 2ª/3ª Ch. AC:</u>: 858,42 COM BONIFICAÇÃO e 780,36 SEM BONIFICAÇÃO<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 780,1"
    },
    {
        nome: 'UPE - Garanhuns *BONIFICAÇÃO',
        notaCorte: 782.98,
        vagas: 12,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 12 candidatos<br>"+
        "Corte Ch Regular AC</u>: 848.83, COM BONIFICAÇÃO e 771,66 SEM BONIFICAÇÃO <br><br>"+
        "<u><b>2ª/3ª Ch. AC:</u></b> 1 candidatos<br>"+
        "Corte 2ª/3ª Ch. AC:</u>: 848,80 COM BONIFICAÇÃO e 771,46 SEM BONIFICAÇÃO"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 782,98"
    },
    {
        nome: 'UPE - Recife *BONIFICAÇÃO',
        notaCorte: 787.98,
        vagas: 45,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 46 candidatos<br>"+
        "Corte Ch Regular AC</u>: 860.07, COM BONIFICAÇÃO e 781,88 SEM BONIFICAÇÃO <br><br>"+
        "<u><b>2ª/3ª Ch. AC:</u></b> 3 candidatos<br>"+
        "Corte 2ª/3ª Ch. AC:</u>: 858,42 COM BONIFICAÇÃO e 780,38 SEM BONIFICAÇÃO<br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 787,98"
    },
    {
        nome: 'UPE - Serra Talhada *BONIFICAÇÃO',
        notaCorte: 775.92,
        vagas: 6,
        pesos: { redacao: 1, natureza: 1, humanidades: 1, linguagens: 1, matematica: 1 },
        pesos_numeros: [1, 1, 1, 1, 1],// Ordem: L (Linguagens), H (Humanidades), N (Natureza), M (Matemática), R (Redação)
        somapesos: 1 + 1 + 1 + 1 + 1,
        chamadas: "<br><u><b>Ch. Regular AC:</u></b> 6 candidatos<br>"+
        "Corte Ch Regular AC</u>: 857,12, COM BONIFICAÇÃO e 779,2 SEM BONIFICAÇÃO <br><br>"+
        "<br><u><b>Chamadas finalizadas</b></u><br>"+
        "<br><b>PARCIAIS SISU 2025:</b><br>"+
        "Corte 1ª Parcial = 775,92"
    }

];

const notas = {
    linguagens: [
        { acertos: 0, min: 287.2, media: 287.6, max: 288.6 },
        { acertos: 1, min: 287, media: 295.5, max: 346.1 },
        { acertos: 2, min: 287.6, media: 304.3, max: 366.2 },
        { acertos: 3, min: 288, media: 315.4, max: 384.2 },
        { acertos: 4, min: 288.2, media: 322.2, max: 392.8 },
        { acertos: 5, min: 288.7, media: 332.9, max: 408.3 },
        { acertos: 6, min: 290.3, media: 344.8, max: 419.5 },
        { acertos: 7, min: 291.6, media: 357.9, max: 429.3 },
        { acertos: 8, min: 292.3, media: 370.9, max: 439.7 },
        { acertos: 9, min: 294.4, media: 384.9, max: 450.3 },
        { acertos: 10, min: 295.4, media: 399.1, max: 459.8 },
        { acertos: 11, min: 301.2, media: 413, max: 469.6 },
        { acertos: 12, min: 302.5, media: 427, max: 481.6 },
        { acertos: 13, min: 305.1, media: 440, max: 489.4 },
        { acertos: 14, min: 308.1, media: 453, max: 500.5 },
        { acertos: 15, min: 328.8, media: 464.7, max: 510.7 },
        { acertos: 16, min: 323.1, media: 476, max: 520.7 },
        { acertos: 17, min: 346.3, media: 486.5, max: 529.1 },
        { acertos: 18, min: 366.7, media: 496.3, max: 536.3 },
        { acertos: 19, min: 398.8, media: 505.6, max: 544.7 },
        { acertos: 20, min: 407.7, media: 514.5, max: 555.7 },
        { acertos: 21, min: 399.4, media: 523, max: 560.3 },
        { acertos: 22, min: 453.9, media: 531.3, max: 567.4 },
        { acertos: 23, min: 471.2, media: 539.4, max: 578.4 },
        { acertos: 24, min: 495.2, media: 547.3, max: 579.4 },
        { acertos: 25, min: 505.5, media: 555.2, max: 588.7 },
        { acertos: 26, min: 517, media: 563.1, max: 598 },
        { acertos: 27, min: 519.6, media: 571.1, max: 605.7 },
        { acertos: 28, min: 531.3, media: 579.2, max: 610.2 },
        { acertos: 29, min: 546, media: 587.2, max: 619.2 },
        { acertos: 30, min: 555, media: 595.6, max: 628 },
        { acertos: 31, min: 557.9, media: 604.2, max: 634.5 },
        { acertos: 32, min: 569.4, media: 612.9, max: 641.5 },
        { acertos: 33, min: 582.5, media: 622.2, max: 650.8 },
        { acertos: 34, min: 592.7, media: 631.8, max: 659.5 },
        { acertos: 35, min: 595.1, media: 642.1, max: 670.3 },
        { acertos: 36, min: 599, media: 652.8, max: 676.6 },
        { acertos: 37, min: 624.2, media: 664.4, max: 686.3 },
        { acertos: 38, min: 639.5, media: 677.1, max: 698.9 },
        { acertos: 39, min: 649.7, media: 690.4, max: 715.7 },
        { acertos: 40, min: 652.8, media: 704.5, max: 729.4 },
        { acertos: 41, min: 690.4, media: 719.9, max: 744.9 },
        { acertos: 42, min: 709.8, media: 736.8, max: 761.6 },
        { acertos: 43, min: 739.3, media: 758.1, max: 782 },
        { acertos: 44, min: 768.9, media: 782.6, max: 801.1 },
        { acertos: 45, min: 820.8, media: 820.8, max: 820.8 }
    ],
    humanidades: [
        { acertos: 0, min: 293.5, media: 293.5, max: 293.5 },
        { acertos: 1, min: 293.6, media: 301.3, max: 336.5 },
        { acertos: 2, min: 293.7, media: 310.4, max: 368.4 },
        { acertos: 3, min: 293.9, media: 316, max: 380.7 },
        { acertos: 4, min: 294, media: 324.4, max: 402.6 },
        { acertos: 5, min: 294.9, media: 333, max: 404.3 },
        { acertos: 6, min: 295.4, media: 343, max: 426.2 },
        { acertos: 7, min: 295.2, media: 353.7, max: 434.4 },
        { acertos: 8, min: 296.4, media: 365.9, max: 448.5 },
        { acertos: 9, min: 296.4, media: 378.3, max: 457.9 },
        { acertos: 10, min: 298.6, media: 392.6, max: 471.1 },
        { acertos: 11, min: 305.8, media: 406.7, max: 481.6 },
        { acertos: 12, min: 306.7, media: 421.4, max: 491 },
        { acertos: 13, min: 314.6, media: 436.2, max: 507.2 },
        { acertos: 14, min: 315.2, media: 450.5, max: 506.4 },
        { acertos: 15, min: 335.7, media: 464.3, max: 517.7 },
        { acertos: 16, min: 334.7, media: 477.1, max: 532.4 },
        { acertos: 17, min: 348.2, media: 488.9, max: 538.5 },
        { acertos: 18, min: 349.6, media: 500.1, max: 544.1 },
        { acertos: 19, min: 386.4, media: 510.4, max: 553.1 },
        { acertos: 20, min: 393.5, media: 520.1, max: 559.1 },
        { acertos: 21, min: 429.4, media: 529.2, max: 569.3 },
        { acertos: 22, min: 446.2, media: 537.8, max: 577.4 },
        { acertos: 23, min: 477, media: 546, max: 584.5 },
        { acertos: 24, min: 479.3, media: 554.1, max: 591.3 },
        { acertos: 25, min: 505.1, media: 561.7, max: 599.3 },
        { acertos: 26, min: 509.6, media: 569.3, max: 608.6 },
        { acertos: 27, min: 519.3, media: 576.8, max: 615.9 },
        { acertos: 28, min: 535.3, media: 584.3, max: 621.6 },
        { acertos: 29, min: 541.2, media: 591.8, max: 631.9 },
        { acertos: 30, min: 555.2, media: 599.5, max: 644.5 },
        { acertos: 31, min: 559.6, media: 607.5, max: 649.7 },
        { acertos: 32, min: 572.5, media: 615.5, max: 656 },
        { acertos: 33, min: 571.2, media: 624.1, max: 665.1 },
        { acertos: 34, min: 578.4, media: 633, max: 673.6 },
        { acertos: 35, min: 595.5, media: 642.7, max: 684.3 },
        { acertos: 36, min: 600, media: 653.2, max: 695.2 },
        { acertos: 37, min: 611.9, media: 664.3, max: 703.1 },
        { acertos: 38, min: 625, media: 676.7, max: 716.5 },
        { acertos: 39, min: 630.8, media: 689.7, max: 730.4 },
        { acertos: 40, min: 647.5, media: 705, max: 743.4 },
        { acertos: 41, min: 664.9, media: 722, max: 757 },
        { acertos: 42, min: 684.3, media: 740.8, max: 772.6 },
        { acertos: 43, min: 725.5, media: 763.8, max: 788 },
        { acertos: 44, min: 756, media: 792.3, max: 805.1 },
        { acertos: 45, min: 823, media: 823, max: 823 }
    ],
    natureza: [
        { acertos: 0, min: 323.3, media: 323.3, max: 323.3 },
        { acertos: 1, min: 323.3, media: 337.6, max: 374 },
        { acertos: 2, min: 322.4, media: 351.5, max: 410.3 },
        { acertos: 3, min: 323.4, media: 362.6, max: 440.9 },
        { acertos: 4, min: 323.4, media: 375.5, max: 463.5 },
        { acertos: 5, min: 323.4, media: 387.7, max: 492.8 },
        { acertos: 6, min: 322.7, media: 399.9, max: 512.4 },
        { acertos: 7, min: 321.1, media: 413.1, max: 527.3 },
        { acertos: 8, min: 316.1, media: 426.6, max: 538.7 },
        { acertos: 9, min: 320.3, media: 441.5, max: 549.9 },
        { acertos: 10, min: 324.3, media: 457, max: 562.7 },
        { acertos: 11, min: 324.4, media: 473.5, max: 574.6 },
        { acertos: 12, min: 327, media: 490.3, max: 588.1 },
        { acertos: 13, min: 328.8, media: 508, max: 593.6 },
        { acertos: 14, min: 330.3, media: 525.6, max: 606.7 },
        { acertos: 15, min: 339.1, media: 542.8, max: 613.8 },
        { acertos: 16, min: 338.3, media: 559.8, max: 621.1 },
        { acertos: 17, min: 339.1, media: 575.3, max: 627.1 },
        { acertos: 18, min: 366, media: 589.8, max: 635.4 },
        { acertos: 19, min: 363.6, media: 602.7, max: 646.4 },
        { acertos: 20, min: 452, media: 613.9, max: 655.9 },
        { acertos: 21, min: 495.2, media: 624.5, max: 657.5 },
        { acertos: 22, min: 539.2, media: 633.5, max: 668.5 },
        { acertos: 23, min: 504.6, media: 642.1, max: 672.6 },
        { acertos: 24, min: 598.5, media: 649.9, max: 681.1 },
        { acertos: 25, min: 621.7, media: 657.9, max: 684.5 },
        { acertos: 26, min: 615.2, media: 665.2, max: 692.5 },
        { acertos: 27, min: 635.9, media: 672.3, max: 697.2 },
        { acertos: 28, min: 643.7, media: 679, max: 703.4 },
        { acertos: 29, min: 651.9, media: 686.3, max: 708.5 },
        { acertos: 30, min: 669.1, media: 693.5, max: 718.7 },
        { acertos: 31, min: 670.7, media: 700.5, max: 727.7 },
        { acertos: 32, min: 682.5, media: 707.6, max: 730.3 },
        { acertos: 33, min: 687.7, media: 715, max: 741.9 },
        { acertos: 34, min: 700, media: 722.8, max: 746.6 },
        { acertos: 35, min: 707.1, media: 731.4, max: 759.7 },
        { acertos: 36, min: 713.3, media: 739.2, max: 766.1 },
        { acertos: 37, min: 719.4, media: 748.5, max: 776.2 },
        { acertos: 38, min: 725.4, media: 757.5, max: 791.4 },
        { acertos: 39, min: 742.6, media: 767.9, max: 792.3 },
        { acertos: 40, min: 751.2, media: 778.6, max: 803.7 },
        { acertos: 41, min: 766, media: 791, max: 813.5 },
        { acertos: 42, min: 775.4, media: 805.6, max: 832.7 },
        { acertos: 43, min: 796.6, media: 826.4, max: 844.3 },
        { acertos: 44, min: 820.7, media: 845.6, max: 856.7 },
        { acertos: 45, min: 868.4, media: 868.4, max: 868.4 }
    ],
    matematica: [
        { acertos: 0, min: 328.2, media: 328.2, max: 328.2 },
        { acertos: 1, min: 328.2, media: 335.2, max: 369.6 },
        { acertos: 2, min: 328.2, media: 343, max: 399.4 },
        { acertos: 3, min: 328.2, media: 350.6, max: 429.8 },
        { acertos: 4, min: 322.1, media: 359.4, max: 455 },
        { acertos: 5, min: 328.5, media: 370.2, max: 483.2 },
        { acertos: 6, min: 325.5, media: 382.1, max: 505.4 },
        { acertos: 7, min: 324.5, media: 395.5, max: 521.7 },
        { acertos: 8, min: 322.7, media: 410.2, max: 541.9 },
        { acertos: 9, min: 327.6, media: 428, max: 559.6 },
        { acertos: 10, min: 328, media: 447.5, max: 577.4 },
        { acertos: 11, min: 332, media: 469.2, max: 596.4 },
        { acertos: 12, min: 335.5, media: 492.4, max: 616 },
        { acertos: 13, min: 332.2, media: 516.9, max: 624.2 },
        { acertos: 14, min: 341.9, media: 541.8, max: 640.3 },
        { acertos: 15, min: 341.2, media: 565.6, max: 656.7 },
        { acertos: 16, min: 358.6, media: 588, max: 665.3 },
        { acertos: 17, min: 366.5, media: 608, max: 677.2 },
        { acertos: 18, min: 382.9, media: 626.2, max: 687.5 },
        { acertos: 19, min: 408, media: 642.6, max: 698.3 },
        { acertos: 20, min: 459, media: 657, max: 706.7 },
        { acertos: 21, min: 515, media: 670.4, max: 715.6 },
        { acertos: 22, min: 557.7, media: 682.3, max: 723.1 },
        { acertos: 23, min: 595.9, media: 693.7, max: 734.9 },
        { acertos: 24, min: 621.7, media: 704.7, max: 740.5 },
        { acertos: 25, min: 641.2, media: 715.1, max: 749.9 },
        { acertos: 26, min: 653.3, media: 725.1, max: 755.5 },
        { acertos: 27, min: 667.6, media: 735, max: 763.5 },
        { acertos: 28, min: 689.4, media: 744.9, max: 774.3 },
        { acertos: 29, min: 696, media: 754.8, max: 785.2 },
        { acertos: 30, min: 711.1, media: 764.9, max: 794.8 },
        { acertos: 31, min: 733.7, media: 775.1, max: 803.2 },
        { acertos: 32, min: 737.3, media: 785.6, max: 813.2 },
        { acertos: 33, min: 757, media: 796.9, max: 828.7 },
        { acertos: 34, min: 767.2, media: 808.1, max: 837.1 },
        { acertos: 35, min: 782.3, media: 819.4, max: 852.5 },
        { acertos: 36, min: 794.7, media: 831.9, max: 865.4 },
        { acertos: 37, min: 801.9, media: 845.1, max: 876.4 },
        { acertos: 38, min: 828.6, media: 859.2, max: 887.9 },
        { acertos: 39, min: 840.9, media: 874, max: 909.5 },
        { acertos: 40, min: 854.1, media: 891.1, max: 922.7 },
        { acertos: 41, min: 872.5, media: 908.6, max: 935.8 },
        { acertos: 42, min: 891.9, media: 928.4, max: 947.8 },
        { acertos: 43, min: 917.8, media: 946.6, max: 958.6 },
        { acertos: 44, min: 958.6, media: 958.6, max: 958.6 }
]};

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("acertos-form");
    const gerarNotasBtn = document.querySelector("button[type='button']");

    // Adiciona o evento de clique ao botão "Gerar Notas Possíveis"
    gerarNotasBtn.addEventListener("click", function(event) {
        event.preventDefault();
        gerarNotas();
    });

    // Adiciona o evento de envio do formulário
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        gerarNotas(); // Chama a função que você deseja executar ao enviar o formulário
    });

    // Adiciona um event listener nos inputs para capturar "Enter"
    const inputs = form.querySelectorAll("input[type='number']");
    inputs.forEach(input => {
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                gerarNotas();
            }
        });
    });

    function gerarNotas() {
        // Captura e verifica se todos os campos foram preenchidos
        const linguagens = parseInt(document.getElementById('linguagens-acertos').value);
        const humanidades = parseInt(document.getElementById('humanidades-acertos').value);
        const natureza = parseInt(document.getElementById('natureza-acertos').value);
        const matematica = parseInt(document.getElementById('matematica-acertos').value);
        const redacao = parseInt(document.getElementById('redacao-nota').value);

        if (isNaN(linguagens) || isNaN(humanidades) || isNaN(natureza) || isNaN(matematica) || isNaN(redacao)) {
            alert("Por favor, preencha todos os campos com números válidos.");
            return;
        }

        const acertos = { linguagens, humanidades, natureza, matematica, redacao };

        ['linguagens', 'humanidades', 'natureza', 'matematica'].forEach(area => {
            const nota = notas[area].find(n => n.acertos === acertos[area]);
            const select = document.getElementById(`${area}-nota`);

            // Atualizando as opções do select
            select.options[0].text = `Nota Mínima (${nota.min})`;
            select.options[1].text = `Nota Média (${nota.media})`;
            select.options[2].text = `Nota Máxima (${nota.max})`;

            // Definindo a nota máxima como valor padrão
            select.selectedIndex = 2;
        });

        // Exibe a seção de seleção de notas
        document.getElementById('notas-section').style.display = 'block';
    }
});
    function calcularAprovacao() {
        const notasFinais = {};
        ['linguagens', 'humanidades', 'natureza', 'matematica'].forEach(area => {
            const selecao = document.getElementById(`${area}-nota`).value;
            let nota;

            if (selecao === 'min') {
                nota = notas[area].find(n => n.acertos === parseInt(document.getElementById(`${area}-acertos`).value)).min;
            } else if (selecao === 'media') {
                nota = notas[area].find(n => n.acertos === parseInt(document.getElementById(`${area}-acertos`).value)).media;
            } else if (selecao === 'max') {
                nota = notas[area].find(n => n.acertos === parseInt(document.getElementById(`${area}-acertos`).value)).max;
            } else {
                nota = parseFloat(document.getElementById(`${area}-custom`).value);
            }

            notasFinais[area] = nota;
        });

        notasFinais.redacao = parseFloat(document.getElementById('redacao-nota').value);

        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = ''; // Limpa o resultado anterior

        faculdades.forEach(faculdade => {
            let notaFinal = 0;
            let somaPesos = 0;

            for (const area in faculdade.pesos) {
                notaFinal += notasFinais[area] * faculdade.pesos[area];
                somaPesos += faculdade.pesos[area];
            }

            const notaFinalPonderada = notaFinal / somaPesos;

            // Cria um item de lista para cada resultado
            const resultadoItem = document.createElement('li');
            resultadoItem.style.listStyleType = 'disc'; // Define o marcador como uma bolinha preta
            resultadoItem.style.marginBottom = '15px'; // Espaçamento entre os itens

            // Define o status de aprovação
            const statusAprovado = notaFinalPonderada >= faculdade.notaCorte;
            const statusClass = statusAprovado ? 'aprovado' : 'nao-aprovado';

            // Define o conteúdo do item com detalhes formatados
            resultadoItem.innerHTML = `
                <strong>${faculdade.nome}</strong><br>
                Sua Nota: ${notaFinalPonderada.toFixed(2)}<br>
                Vagas: ${faculdade.vagas}<br>
                Pesos (L-H-N-M-R): ${faculdade.pesos_numeros.join(', ')}<br>
                ${faculdade.chamadas}<br>
                <strong class="${statusClass}">${statusAprovado ? 'APROVADO' : 'NÃO APROVADO'}</strong>
            `;

            // Adiciona o item ao div de resultados ----  Nota de Corte Ch Regular: ${faculdade.notaCorte}<br>
            resultadoDiv.appendChild(resultadoItem);
        });

        document.getElementById('resultado-section').style.display = 'block';
    }

    ['linguagens', 'humanidades', 'natureza', 'matematica'].forEach(area => {
        document.getElementById(`${area}-nota`).addEventListener('change', function() {
            const customInput = document.getElementById(`${area}-custom`);
            if (this.value === 'custom') {
                customInput.style.display = 'block';
            } else {
                customInput.style.display = 'none';
            }
        });
    });

    // Adiciona o evento para rolagem automática após cálculo
    document.getElementById('verificar-aprovacao').addEventListener('click', function() {
        // Exibe a seção de resultados antes de rolar
        document.getElementById('resultado-section').style.display = 'block';

        // Rola suavemente até a seção de resultados
        document.getElementById('resultado-section').scrollIntoView({
            behavior: 'smooth'
        });
    });

