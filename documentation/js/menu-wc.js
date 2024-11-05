'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">learn-nestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-22b2c0e4b992a48f7064319b43fa0acc27c621e4bd7042dd9f4b631f333e561d0aa7fbe8ff041e15333be7e0df8272ce27d99c0da041a79a9f6a4960cc9478fc"' : 'data-bs-target="#xs-controllers-links-module-AppModule-22b2c0e4b992a48f7064319b43fa0acc27c621e4bd7042dd9f4b631f333e561d0aa7fbe8ff041e15333be7e0df8272ce27d99c0da041a79a9f6a4960cc9478fc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-22b2c0e4b992a48f7064319b43fa0acc27c621e4bd7042dd9f4b631f333e561d0aa7fbe8ff041e15333be7e0df8272ce27d99c0da041a79a9f6a4960cc9478fc"' :
                                            'id="xs-controllers-links-module-AppModule-22b2c0e4b992a48f7064319b43fa0acc27c621e4bd7042dd9f4b631f333e561d0aa7fbe8ff041e15333be7e0df8272ce27d99c0da041a79a9f6a4960cc9478fc"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-22b2c0e4b992a48f7064319b43fa0acc27c621e4bd7042dd9f4b631f333e561d0aa7fbe8ff041e15333be7e0df8272ce27d99c0da041a79a9f6a4960cc9478fc"' : 'data-bs-target="#xs-injectables-links-module-AppModule-22b2c0e4b992a48f7064319b43fa0acc27c621e4bd7042dd9f4b631f333e561d0aa7fbe8ff041e15333be7e0df8272ce27d99c0da041a79a9f6a4960cc9478fc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-22b2c0e4b992a48f7064319b43fa0acc27c621e4bd7042dd9f4b631f333e561d0aa7fbe8ff041e15333be7e0df8272ce27d99c0da041a79a9f6a4960cc9478fc"' :
                                        'id="xs-injectables-links-module-AppModule-22b2c0e4b992a48f7064319b43fa0acc27c621e4bd7042dd9f4b631f333e561d0aa7fbe8ff041e15333be7e0df8272ce27d99c0da041a79a9f6a4960cc9478fc"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentsModule.html" data-type="entity-link" >StudentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StudentsModule-95074e35da02b78542afda746ff22eff4aeb87071a491c8b7b89db09897b9ad20206aecf7d7aa090002169a83ab6204605ce5387dfd5931372cbaf3089392d31"' : 'data-bs-target="#xs-controllers-links-module-StudentsModule-95074e35da02b78542afda746ff22eff4aeb87071a491c8b7b89db09897b9ad20206aecf7d7aa090002169a83ab6204605ce5387dfd5931372cbaf3089392d31"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StudentsModule-95074e35da02b78542afda746ff22eff4aeb87071a491c8b7b89db09897b9ad20206aecf7d7aa090002169a83ab6204605ce5387dfd5931372cbaf3089392d31"' :
                                            'id="xs-controllers-links-module-StudentsModule-95074e35da02b78542afda746ff22eff4aeb87071a491c8b7b89db09897b9ad20206aecf7d7aa090002169a83ab6204605ce5387dfd5931372cbaf3089392d31"' }>
                                            <li class="link">
                                                <a href="controllers/StudentsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StudentsModule-95074e35da02b78542afda746ff22eff4aeb87071a491c8b7b89db09897b9ad20206aecf7d7aa090002169a83ab6204605ce5387dfd5931372cbaf3089392d31"' : 'data-bs-target="#xs-injectables-links-module-StudentsModule-95074e35da02b78542afda746ff22eff4aeb87071a491c8b7b89db09897b9ad20206aecf7d7aa090002169a83ab6204605ce5387dfd5931372cbaf3089392d31"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StudentsModule-95074e35da02b78542afda746ff22eff4aeb87071a491c8b7b89db09897b9ad20206aecf7d7aa090002169a83ab6204605ce5387dfd5931372cbaf3089392d31"' :
                                        'id="xs-injectables-links-module-StudentsModule-95074e35da02b78542afda746ff22eff4aeb87071a491c8b7b89db09897b9ad20206aecf7d7aa090002169a83ab6204605ce5387dfd5931372cbaf3089392d31"' }>
                                        <li class="link">
                                            <a href="injectables/StudentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateStudentDto.html" data-type="entity-link" >CreateStudentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Student.html" data-type="entity-link" >Student</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateStudentDto.html" data-type="entity-link" >UpdateStudentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateStudentPartialDto.html" data-type="entity-link" >UpdateStudentPartialDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IStudent.html" data-type="entity-link" >IStudent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});