Feature: Inlogervaring verbeteren

  Scenario: Verbeterde Inlogervaring
    Given de gebruiker is op de inlogpagina van OpinionOnline
    When de gebruiker zijn of haar inloggegevens invult
    Then moet de gebruiker snel en veilig toegang krijgen tot zijn of haar account
  
  Scenario: Mobiele Responsiviteit bij Enquêtes Invullen
    Given de gebruiker opent OpinionOnline op een mobiel apparaat
    When de gebruiker probeert een enquête in te vullen
    Then moet de enquête goed weergegeven worden op het mobiele scherm

  Scenario: UI-aanpassingen voor Enquête Creatie
    Given de gebruiker wil een nieuwe enquête maken
    When de gebruiker de enquête-creatie interface gebruikt
    Then moet de interface gebruiksvriendelijk en intuïtief zijn