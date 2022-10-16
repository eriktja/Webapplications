
1. lag et prosjekt med en package-lock.json og package.json
    npm init -y
2. Legg til babel dependency
    npm add -D jest babel-test @babel/core babel/preset-env
3. lag babel.config.js. Setter node til current. Henter siste versjon.
    module.exports = {
        presets: [
            ['@babel/preset-env', { targets: {node: 'current' } } ]
        ]
    }
4. initier jest med et script
    ./node_modlues/.bin/jest --init
5. Spesifiser hvor jest skal lete etter tester ii jest.config.js (ligger allerede i filen, men er kommentert ut)
      //The glob patterns Jest uses to detect test files
        testMatch: [
            "**/__tests__/**/*.[jt]s?(x)",
            "**/?(*.)+(spec|test).[tj]s?(x)"
        ],
6. Lag index.js og en testfil 
    kan feks hete index.test.js
