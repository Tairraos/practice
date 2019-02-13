#!/usr/bin/env checkio --domain=py run periodic-table

# https://py.checkio.org/mission/periodic-table/

# .orbital-quantum, .noble-gas,     .electron-configuration,     .unicode-superscript {        width: 80%;         margin-left: auto;         margin-right: auto;    }        .noble-gas {        width: 100%;     }        .orbital-quantum th,    .noble-gas th,     .unicode-superscript th {        border-bottom: 3px solid #65A1CF;    }        .electron-configuration td,     .unicode-superscript td{        border-bottom: 1px solid #65A1CF;    }        .electron-configuration .description {        color: #006CA9;        font-weight: bold;    }        .electron-configuration .content {        text-align: center;            }        .orbital-quantum .center,     .noble-gas .center,     .unicode-superscript td {        text-align: center;    }        .orbital-quantum .spectroscopic{        padding-left: 9%;    }        .unicode-superscript caption {        font-weight: bold;        color: #8FC7ED;    }        .credit {        font-size: .8em;        text-align: center;    }An element, as any scientist knows, is a substance that cannot be chemicallyinterconvertedor broken down into simpler substances and are primary constituents of matter. Ancient philosophers and observers of the universe identified the elements as earth, water, air and fire. From our modern understanding, natural abundances of iron, gold, silver, lead, tin, mercury, sulfur and carbon are the very first known elements used to build civilization. Other elements are hiding in mixtures and compounds which could not easily be extracted or purified. Early chemist classified them by their properties and characteristics, subsequently discovering many more (and the way to purify and extract, even synthesize them) with nearly all of the naturally-occuring elements having been discovered by 1900.
# 
# One man shed light on the structure and relationships of the the elements by ordering them in a table and sorting them.Dmitri Ivanovich Mendeleev (Дми́трий Ива́нович Менделе́ев)(1834-1907) published his formulation in 1869 to correct the properties of elements and to aide int he prediction of the properties undiscovered elements. This work is known now as thePeriodic Table of Elements.
# 
# Source:wikipediaPeriodicity Of Elements
# The essential model or theory to understand an elements chemical properties came from the early birth of quantum mechanics and is known as electron configuration. The element is modeled as anatomwith its "number", theatomic number( Z )which represents the number of protons, and therefore the number of electrons as well( in ground state ). The periodicity of the elements might be explained by theelectron structure of the atomwhich can in turn be explained by quantum theory.
# 
# An electron within the atom can be described by the four quantum numbers:
# 
# n    = the principal quantum number( or simply,quantum number), e.g: 1,2,3…l     = the orbital quantum number( or simply,angular number), e.g: 0,1,2…ml= the orbital magnetic quantum number( or simply,magnetic number), e.g: -2,-1,0,+1,+2…ms= the spin magnetic quantum number( or simply,spin number), e.g: ⁺½ or ⁻½.The four quantum numbers designatespecific levels, orbitals, magnetics, and spins of electrons. This explains that they are describing     the detailed characteristic of the electrons in the atom. Theprincipal quantum number ndescribes the energy level of the electron shell. When value of n is higher, the number of principal electron shell is greater, which means a greater distance between the farthest electron and the atoms nucleus.     As a result the size and radius of the atom increases. Theangular quantum number ldescribes the shape of the orbital.Each quantum numberis composed of one or more subshells( orbital ). The detail of possible subshells are shown in following table:
# 
# Orbital labellMax electronsSpectroscopic Names02Sharpp16Principald210Diffusef314Fundamentalg418( simply in alphabet after f )h522i626
# Themagnetic quantum numberdescribesthe number of orbitalsand its orientation in the space of a specific orbital. Consequently, its value depends on the orbital angular momentum quantum number l. The possible value of mlis an interval ranging from -l to +l, so it may be zero, a negative integer, or a positive integer. Unlike n, l, and ml, thespin magnetic quantum numberdoes not depend on another quantum number. It definesthe direction of the electrons spin, which value may have ⁺½ (represented by ↾ "spin up") or ⁻½(represented by ⇃ "spin down.")
# So far we have explanations for the four quantum numbers that model an elemental atom.
# Principles
# There are principles that must be followed when writing electron configuration; these principles are described below:
# Pauli Exclusion Principle or Quantum StateThis principle states that:There are no two electrons in an atomcan exist in the same quantum state.Because the state of any electron is specified by the quantum numbers n, l, mland ms, the principle simply states             that no two electron can have thesame set of the four quantum numbers.Aufbauf Principle or Constructing Up Principlestates that:A maximum oftwo electronsare put into orbitals in the order of increasing orbital energy: the lowest-energy orbitalsare filled before electronsare placed in higher-energy orbitals.Klechkowski's Rule or Occupation of Orbitalstates that:Orbitalsare filled in the order of increasingn+l.Where two orbitals have the same value of n+l, theyare filled in order of increasingnOne of the way to remember this rule is, to make a table like the one below and use vertical lines             to determine which subshells correspond to each other.Source:wikipediaHund's Rule or Pairing Rulestates the following:Pairing of electrons take place when all the available degenerate orbitals in a given subshell are filled with one electron each.Orbitals may have identical energy levels when they are of the same subshell (l = 1, then mlare -1, 0, 1, which have similar energy).             Then when assigning electrons in orbitals, each electronwill first fill all the orbitals with similar energy(read: degenerate orbitals)             before pairing with another electron.
# Noble Gas Notation
# Noble Gas Notation takes a slightly different form as seen here:
# [closest noble gas element][quantum number][orbital name][number of electrons]
# Here are some samples (Noble Gasses are located in column 18 (IUPAC),) described below:ElementSymbolAtomic Number( Z )Electron ConfigurationNoble Gas NotationHeliumHe21s²1s²NeonNe101s² 2s² 2p⁶[He] 2s² 2p⁶ArgonAr181s² 2s² 2p⁶ 3s² 3p⁶[Ne] 3s² 3p⁶KryptonKr361s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶[Ar] 3d¹⁰ 4s² 4p⁶XenonXe541s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶[Kr] 4d¹⁰ 5s² 5p⁶…and so on…Writing Electron Configuration
# Electron configuration follows this form:
# [quantum number][orbital name][number of electrons]
# When writing the electron configuration, we must first write theenergy level( quantum number ) then thesubshell(orbital number) and thesuperscript, which is the number of electrons in that specific subshell. Usingthese rules, we can now start writing the electron configuration for all the elements in the periodic table.
# 
# Consider the following element, Oxygen(O) with Z = 8:Element:OxygenSymbol:OZ:8Orbital Diagram:⇅  ⇅   ⇅↾↾
# Orbital Model:2      2      2    1    1Electron Configuration:1s²    2s²      2p⁴Noble Gas Notation:[He] 2s² 2p⁴CheckiO Quantum Task
# Your task is to determine theatomic numberand electron configuration in thenoble gas notationas well as itsorbital model, which is0- if there are no electrons,1- if the electron is in a degenerate orbital, and2- for electrons in a full orbital,by its symbolic element.The number of elements is limited to118(as of September First, 2013). This task will use superscript for the electron notation, as seen below:Unicode superscript charactersUnicode0123456789U+00Bxx²x³x¹U+207xx⁰x⁴x⁵x⁶x⁷x⁸x⁹
# Input data:A string, which is not case sensitive, the symbol of the element
# 
# Output data:A list containing the atomic number, configuration notation and orbital model.
# 
# Example:
# 
# assert( checkio( 'H' ) == [ "1", u"1s¹", "1" ] ), "First Test - 1s¹"
# assert( checkio( 'He' ) == [ "2", u"1s²", "2" ] ), "Second Test - 1s²"
# assert( checkio( 'Al' ) == [ "13", u"[Ne] 3s² 3p¹", "2 2 222 2 100" ] ), "Third Test - 1s² 2s² 2p6 3s² 3p¹"
# assert( checkio( 'O' ) == ["8", u"[He] 2s² 2p⁴", "2 2 211"] ), "Fourth Test - 1s² 2s² 2p⁴"
# assert( checkio( 'Li' ) == [ "3", u"[He] 2s¹", "2 1" ] ), "Fifth Test - 1s² 2s¹"
# 
# print('All done!')
# 
# END_DESC

def checkio(element):
    """
        string of element arguments
    """
    return ["", u"", ""]


if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert (checkio('H') == ["1", u"1s¹", "1"]), "First Test - 1s¹"
    assert (checkio('He') == ["2", u"1s²", "2"]), "Second Test - 1s²"
    assert (checkio('Al') == ["13", u"[Ne] 3s² 3p¹", "2 2 222 2 100"]), "Third Test - 1s² 2s² 2p⁶ 3s² 3p¹"
    assert (checkio('O') == ["8", u"[He] 2s² 2p⁴", "2 2 211"]), "Fourth Test - 1s² 2s² 2p⁴"
    assert (checkio('Li') == ["3", u"[He] 2s¹", "2 1"]), "Fifth Test - 1s² 2s¹"

    print('All done!')