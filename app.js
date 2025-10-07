// Felipe Tapia Cybersecurity Blog - Main JavaScript

class CybersecurityBlog {
    constructor() {
        this.currentPage = 'home';
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.posts = [];
        this.init();
    }

    init() {
        this.loadBlogData();
        this.setupEventListeners();
        this.setupMobileMenu();
        this.renderLatestPosts();
        this.renderAllPosts();
    }

    loadBlogData() {
        // Blog data from the provided JSON
        this.posts = [
            {
                id: "cloud-security-azure",
                title: "Cloud Security: Fundamentos y Mejores Prácticas en Azure",
                date: "2024-10-07",
                category: "Cloud Security",
                tags: ["Azure", "Cloud", "Security", "Best Practices"],
                excerpt: "Explora los fundamentos de la seguridad en la nube y las mejores prácticas para implementar una arquitectura segura en Microsoft Azure.",
                content: `# Cloud Security: Fundamentos y Mejores Prácticas en Azure

La seguridad en la nube se ha convertido en una prioridad crítica para las organizaciones modernas. En este artículo, exploraremos los fundamentos de la seguridad en Microsoft Azure y las mejores prácticas que todo profesional de ciberseguridad debe conocer.

## Modelo de Responsabilidad Compartida

Antes de profundizar en las herramientas específicas, es crucial entender el modelo de responsabilidad compartida de Azure:

- **Microsoft es responsable de**: La seguridad física de los centros de datos, la infraestructura de red global, y la seguridad del hipervisor
- **El cliente es responsable de**: La configuración de seguridad de los servicios, la gestión de identidades, y la protección de datos

## Servicios Clave de Seguridad en Azure

### Azure Security Center
Ahora conocido como Microsoft Defender for Cloud, proporciona:
- Evaluación continua de la postura de seguridad
- Recomendaciones de seguridad automáticas
- Detección de amenazas avanzada

### Azure Key Vault
Servicio esencial para:
- Gestión centralizada de secretos
- Rotación automática de claves
- Control de acceso granular

### Azure Active Directory
Pilar de la seguridad de identidad:
- Autenticación multifactor (MFA)
- Acceso condicional
- Privileged Identity Management (PIM)

## Mejores Prácticas Implementadas

Basado en mi experiencia en BUPA Chile, estas son las prácticas más efectivas:

### 1. Principio de Menor Privilegio
- Implementar RBAC (Role-Based Access Control)
- Revisiones periódicas de permisos
- Uso de grupos de seguridad bien definidos

### 2. Monitoreo Continuo
- Azure Monitor para telemetría
- Azure Sentinel para SIEM
- Alertas automatizadas para eventos críticos

### 3. Cifrado Integral
- Cifrado en tránsito con TLS 1.2+
- Cifrado en reposo para todos los datos
- Gestión de claves con HSM

## Herramientas de Auditoría

Para evaluar la postura de seguridad:

\`\`\`bash
# Azure CLI para auditorías
az security assessment list
az security task list
az policy assignment list
\`\`\`

### Cloud Security Posture Management (CSPM)
- Azure Policy para compliance
- Blueprint para deployments seguros
- Security benchmarks automatizados

## Casos de Uso Comunes

### Migración Segura a la Nube
1. **Evaluación inicial**: Assessment de workloads actuales
2. **Diseño de arquitectura**: Implementación de controles de seguridad
3. **Migración gradual**: Validación de controles en cada fase
4. **Operación continua**: Monitoreo y mejora constante

### Implementación de Zero Trust
- Verificación explícita de usuarios y dispositivos
- Acceso con menor privilegio
- Asumir breach y verificar explícitamente

## Conclusión

La seguridad en Azure requiere un enfoque holístico que combine herramientas nativas, mejores prácticas de la industria, y una cultura de seguridad organizacional. La implementación exitosa depende de la comprensión clara del modelo de responsabilidad compartida y la utilización efectiva de los servicios de seguridad disponibles.

**Tags**: #Azure #CloudSecurity #CyberSecurity #BestPractices`
            },
            {
                id: "pentesting-tools-guide",
                title: "Herramientas Esenciales para Pentesting: Guía Completa",
                date: "2024-10-05",
                category: "Pentesting",
                tags: ["Pentesting", "Tools", "Kali Linux", "Vulnerability Assessment"],
                excerpt: "Una guía completa de las herramientas más importantes para penetration testing, desde reconocimiento hasta post-explotación.",
                content: `# Herramientas Esenciales para Pentesting: Guía Completa

El pentesting requiere un arsenal bien equipado de herramientas especializadas. En esta guía, exploraremos las herramientas más importantes que todo pentester debe dominar, organizadas por fase del engagement.

## Preparación del Entorno

### Kali Linux
La distribución de facto para pentesting:
- Más de 600 herramientas preinstaladas
- Actualizaciones constantes
- Soporte para ARM y VM

\`\`\`bash
# Actualización esencial
sudo apt update && sudo apt upgrade -y
sudo apt install kali-linux-everything
\`\`\`

## Fase 1: Reconocimiento

### OSINT (Open Source Intelligence)

#### theHarvester
Recopilación de información pública:
\`\`\`bash
theharvester -d target.com -b google,bing,yahoo -l 500
\`\`\`

#### Recon-ng
Framework modular para reconocimiento:
- Más de 90 módulos
- Base de datos integrada
- API integrations

#### Shodan
Motor de búsqueda para dispositivos IoT:
- Identificación de servicios expuestos
- Detección de vulnerabilidades conocidas
- Geographic mapping de assets

### Network Discovery

#### Nmap
El estándar para network scanning:
\`\`\`bash
# Scan completo con detección de OS y servicios
nmap -A -T4 target.com

# Scan sigiloso
nmap -sS -O target.com

# Scan específico para protocolos médicos (mi especialidad en IOMT)
nmap -p 104,2762,4840 --script dicom* target.com
\`\`\`

#### Masscan
Scanning de alta velocidad:
\`\`\`bash
masscan -p1-10000 10.0.0.0/8 --rate=10000
\`\`\`

## Fase 2: Enumeración

### Web Applications

#### Burp Suite
Proxy interceptor esencial:
- Intruder para ataques automatizados
- Repeater para análisis manual
- Scanner profesional (versión Pro)

#### OWASP ZAP
Alternativa open-source:
- Passive scanning automático
- Active scanning configurable
- API para integración CI/CD

#### Gobuster
Directory/file enumeration:
\`\`\`bash
gobuster dir -u http://target.com -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
\`\`\`

### Database Testing

#### SQLmap
Automatización de SQL injection:
\`\`\`bash
sqlmap -u "http://target.com/page.php?id=1" --dbs
sqlmap -u "http://target.com/page.php?id=1" -D database --tables
\`\`\`

## Fase 3: Vulnerability Assessment

### Network Vulnerabilities

#### Nessus
Scanner comercial líder:
- Plugin updates automáticos
- Compliance templates
- Reporting avanzado

#### OpenVAS
Alternativa open-source:
- 50,000+ vulnerability tests
- Dashboard centralizado
- Custom policies

### Specialized Tools

#### Nikto
Web server scanner:
\`\`\`bash
nikto -h target.com -o report.html -Format htm
\`\`\`

#### SSLyze
SSL/TLS configuration analyzer:
\`\`\`bash
sslyze --regular target.com
\`\`\`

## Fase 4: Explotación

### Frameworks

#### Metasploit
El framework más completo:
\`\`\`bash
# Búsqueda de exploits
search type:exploit platform:windows

# Configuración básica
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS target.com
run
\`\`\`

#### Cobalt Strike
Tool comercial para red teaming:
- C2 (Command & Control) avanzado
- Lateral movement capabilities
- Persistence mechanisms

### Web Exploitation

#### XSSer
Cross-Site Scripting automático:
\`\`\`bash
xsser --url "http://target.com/search.php?q=test"
\`\`\`

#### Commix
Command injection testing:
\`\`\`bash
commix --url="http://target.com/page.php" --data="name=test"
\`\`\`

## Fase 5: Post-Explotación

### Privilege Escalation

#### LinEnum / WinPEAS
Enumeración post-compromiso:
\`\`\`bash
# Linux
./LinEnum.sh -t

# Windows
./winPEASx64.exe
\`\`\`

#### BloodHound
Active Directory mapping:
- Visualización de attack paths
- Identificación de privileged accounts
- Kerberoasting opportunities

### Persistence

#### Empire / Starkiller
Post-exploitation framework:
- PowerShell agents
- Encrypted communications
- Module-based architecture

## Herramientas de Reporting

### PlexTrac
Plataforma comercial para gestión de vulnerabilidades y reporting.

### Dradis
Framework open-source para collaboration:
- Integración con múltiples tools
- Template customization
- Team collaboration

## Best Practices en mi Experiencia

Basado en mi trabajo en BUPA Chile:

### 1. Metodología Estructurada
- Seguir OWASP Testing Guide
- Documentar cada paso
- Mantener evidencias forenses

### 2. Scope Management
- Definición clara de límites
- Authorización por escrito
- Communication plan establecido

### 3. Tool Selection
- Combinar herramientas comerciales y open-source
- Validar findings manualmente
- Custom scripts para casos específicos

## Custom Scripts

\`\`\`python
#!/usr/bin/env python3
# Script personalizado para enumeration
import nmap
import requests

def custom_scan(target):
    nm = nmap.PortScanner()
    result = nm.scan(target, '22-443')
    return result
\`\`\`

## Conclusión

La efectividad del pentesting depende no solo de las herramientas utilizadas, sino de la metodología, experiencia del tester, y comprensión del contexto del negocio. Estas herramientas son el foundation, pero el conocimiento y experiencia hacen la diferencia.

Recuerda siempre: **"The best tool is the one between your ears."**

**Tags**: #Pentesting #Tools #KaliLinux #CyberSecurity #VulnerabilityAssessment`
            },
            {
                id: "okrs-cybersecurity-teams",
                title: "Implementando OKRs en Equipos de Ciberseguridad",
                date: "2024-10-03",
                category: "Management",
                tags: ["OKR", "Team Management", "Cybersecurity", "Performance"],
                excerpt: "Cómo implementar efectivamente Objectives and Key Results (OKRs) en equipos de ciberseguridad para mejorar el performance y alignment estratégico.",
                content: `# Implementando OKRs en Equipos de Ciberseguridad

La implementación de OKRs (Objectives and Key Results) en equipos de ciberseguridad presenta desafíos únicos debido a la naturaleza reactiva y preventiva del trabajo de seguridad. En este artículo, exploraremos cómo adaptar esta metodología para maximizar la efectividad del equipo.

## ¿Qué son los OKRs?

Los OKRs son un framework de goal-setting que ayuda a las organizaciones a definir y track objetivos mensurables. Consisten en:

- **Objectives**: Metas cualitativas, inspiracionales y time-bound
- **Key Results**: Métricas específicas y cuantificables que demuestran el progreso

## Desafíos Únicos en Ciberseguridad

### 1. Naturaleza Reactiva
Muchas tareas de seguridad son reactivas por naturaleza:
- Incident response
- Vulnerability remediation
- Threat hunting

### 2. Métricas de "Negative Success"
El éxito en seguridad a menudo se mide por la ausencia de eventos:
- Zero successful breaches
- Reduced attack surface
- Improved compliance scores

### 3. Balance Entre Proactivo y Reactivo
Necesidad de mantener operaciones while building strategic capabilities.

## Framework de OKRs para Ciberseguridad

Basado en mi experiencia liderando iniciativas de seguridad en BUPA Chile:

### Nivel Estratégico (Anual)

#### Objective 1: Fortalecer la Postura de Seguridad Organizacional
**Key Results**:
- Reducir el Mean Time to Detection (MTTD) de 48 horas a 4 horas
- Alcanzar 95% de compliance en security frameworks aplicables
- Implementar Zero Trust architecture en 80% de los assets críticos

#### Objective 2: Desarrollar Capacidades de Respuesta a Incidentes
**Key Results**:
- Reducir Mean Time to Response (MTTR) de 24 horas a 2 horas
- Completar 12 ejercicios de tabletop simulation
- Capacitar 100% del personal en incident response procedures

### Nivel Táctico (Trimestral)

#### Objective 1: Mejorar Visibility de Amenazas
**Key Results**:
- Deploy advanced threat detection en 100% de endpoints críticos
- Integrar 5 nuevas fuentes de threat intelligence
- Reducir false positives en alertas de seguridad en 40%

#### Objective 2: Optimizar Procesos de Vulnerability Management
**Key Results**:
- Reducir el tiempo promedio de remediation de vulns críticas a 7 días
- Automatizar 80% del proceso de vulnerability scanning
- Mantener menos de 10 vulnerabilidades críticas open en cualquier momento

### Nivel Operacional (Mensual)

#### Objective 1: Fortalecer Security Awareness
**Key Results**:
- 95% de empleados completen training mensual
- Reducir click rate en phishing simulations a menos de 5%
- Implementar 2 nuevas security awareness campaigns

## Métricas Clave por Dominio

### Detection & Response
- **MTTD** (Mean Time to Detection)
- **MTTR** (Mean Time to Response)
- **MTTI** (Mean Time to Investigation)
- Alert fatigue ratio (False positives / True positives)

### Vulnerability Management
- Vulnerability aging (días desde discovery hasta remediation)
- Patch compliance percentage
- Critical vulnerability count
- Risk exposure score

### Compliance & Governance
- Audit findings count
- Policy exception requests
- Training completion rates
- Risk acceptance approvals

### Technology & Architecture
- Security tool coverage percentage
- Integration completeness score
- Automation percentage
- Technical debt in security systems

## Implementación Práctica

### Phase 1: Assessment & Baseline (Mes 1)
1. **Current State Analysis**
   - Audit existing metrics and KPIs
   - Identify measurement gaps
   - Establish baseline measurements

2. **Stakeholder Alignment**
   - Workshop con leadership team
   - Define strategic priorities
   - Identify success criteria

### Phase 2: OKR Design (Mes 2)
1. **Objective Setting**
   - Collaborative sessions with team
   - Alignment con business objectives
   - Validation de feasibility

2. **Key Result Definition**
   - SMART criteria application
   - Measurement methodology
   - Target setting based on baselines

### Phase 3: Execution & Tracking (Ongoing)
1. **Regular Check-ins**
   - Weekly team updates
   - Monthly progress reviews
   - Quarterly formal assessments

2. **Adaptive Management**
   - Adjust targets based on learning
   - Pivot strategies as needed
   - Celebrate wins and learn from misses

## Tools y Tecnología

### Tracking Platforms
- **Jira Align**: Enterprise OKR management
- **Weekdone**: Simple OKR tracking
- **Lattice**: Performance management with OKRs

### Data Sources
- SIEM platforms (Splunk, QRadar)
- Vulnerability scanners (Nessus, Rapid7)
- GRC platforms (ServiceNow, Archer)
- Custom dashboards (Grafana, PowerBI)

### Automation
\`\`\`python
# Script para automated OKR reporting
import requests
import json
from datetime import datetime

def get_security_metrics():
    metrics = {
        'mttd': calculate_mttd(),
        'mttr': calculate_mttr(),
        'vuln_count': get_critical_vulns(),
        'compliance_score': get_compliance_percentage()
    }
    return metrics

def update_okr_dashboard(metrics):
    # Integration con OKR platform
    pass
\`\`\`

## Case Study: Implementación en BUPA Chile

### Contexto
- Team de 8 security professionals
- Hybrid cloud environment (Azure + on-premises)
- Healthcare industry compliance requirements

### Objectives Implementados

#### Q1 2024: Foundation Building
**Objective**: Establecer baseline de security operations
- **KR1**: Complete security maturity assessment ✅
- **KR2**: Implement centralized logging en 100% sistemas críticos ✅
- **KR3**: Establish incident response procedures ✅

#### Q2 2024: Process Optimization
**Objective**: Optimizar efficiency de security operations
- **KR1**: Reduce MTTD de 24h a 8h ✅ (achieved 6h)
- **KR2**: Automate 60% de routine security tasks ✅
- **KR3**: Achieve 90% SLA compliance en incident response 🔄 (85%)

### Lessons Learned

1. **Start Simple**: Begin con 3-5 key metrics, expand gradually
2. **Quality over Quantity**: Better few well-measured OKRs than many poorly tracked
3. **Team Buy-in**: Success depends on team understanding and commitment
4. **Flexibility**: Security teams need agility to respond to emerging threats

## Common Pitfalls y Cómo Evitarlos

### 1. Over-Engineering Metrics
**Problem**: Crear métricas complejas que nadie understands
**Solution**: Use simple, actionable metrics that drive behavior

### 2. Ignoring Context
**Problem**: Set targets without considering external factors
**Solution**: Include environmental factors in target setting

### 3. Punishment Culture
**Problem**: Use OKRs for performance punishment
**Solution**: Focus on learning and improvement, not blame

### 4. Static Targets
**Problem**: Rigid targets that don't adapt to changing threat landscape
**Solution**: Build in flexibility and regular review cycles

## Advanced Techniques

### Risk-Adjusted OKRs
Incorporate risk weighting in objectives:
\`\`\`
Objective: Reduce organizational cyber risk by 40%
KR1: Remediate 95% of critical vulnerabilities (Weight: 40%)
KR2: Implement MFA en 100% privileged accounts (Weight: 35%)
KR3: Complete security awareness training (Weight: 25%)
\`\`\`

### Predictive Metrics
Use leading indicators alongside lagging indicators:
- **Leading**: Training completion, patch deployment rate
- **Lagging**: Incident count, breach impact

## Conclusión

Los OKRs pueden transformar la effectiveness de equipos de ciberseguridad cuando se implementan thoughtfully. El key es balance entre structure y flexibility, measurement y action, individual y team objectives.

Recuerda: Los OKRs son una herramienta, no un fin en sí mismo. El objetivo final es mejorar la security posture de la organización y enable el negocio de manera segura.

**Tags**: #OKR #TeamManagement #CyberSecurity #Performance #Leadership`
            },
            {
                id: "blog-entry-template",
                title: "Template para Nueva Entrada de Blog",
                date: "2024-10-01",
                category: "Template",
                tags: ["Template", "Blogging", "Documentation"],
                excerpt: "Template estándar para crear nuevas entradas en el blog de ciberseguridad. Incluye estructura, formato y guidelines.",
                content: `# [TÍTULO DEL ARTÍCULO]

[Párrafo introductorio que explique brevemente el tema y por qué es relevante para la audiencia de ciberseguridad. Debe enganchar al lector y establecer el contexto.]

## Introducción

[Sección más detallada que establezca:
- El problema o tema que se abordará
- Por qué es importante para profesionales de ciberseguridad
- Qué aprenderá el lector
- Tu experiencia/perspectiva personal en el tema]

## Contexto/Background

[Información de contexto necesaria para entender el tema:
- Definiciones de términos técnicos
- Historia relevante
- Estado actual del tema en la industria]

## [SECCIÓN PRINCIPAL 1]

[Contenido principal organizado en secciones lógicas. Cada sección debe:
- Tener un header descriptivo
- Incluir 2-4 párrafos de contenido
- Incorporar ejemplos prácticos cuando sea apropiado
- Usar listas para información estructurada]

### Subsección Ejemplo
[Para temas complejos, usa subsecciones para mejor organización]

#### Ejemplo de código (si aplica)
\`\`\`bash
# Comentarios explicativos
comando de ejemplo
\`\`\`

\`\`\`python
# Script ejemplo con comentarios
def ejemplo_funcion():
    return "Hello World"
\`\`\`

## [SECCIÓN PRINCIPAL 2]

[Continuación del contenido principal siguiendo la misma estructura]

### Mejores Prácticas
[Sección dedicada a mejores prácticas cuando sea relevante]

- **Práctica 1**: Descripción y justificación
- **Práctica 2**: Descripción y justificación
- **Práctica 3**: Descripción y justificación

### Herramientas Recomendadas
[Lista de herramientas relevantes con breve descripción]

1. **Herramienta 1**: Qué hace y por qué es útil
2. **Herramienta 2**: Qué hace y por qué es útil
3. **Herramienta 3**: Qué hace y por qué es útil

## Implementación Práctica

[Sección step-by-step para implementar los conceptos discutidos:
- Pasos claros y numerados
- Prerequisites
- Configuraciones específicas
- Ejemplos de mi experiencia en BUPA Chile cuando sea relevante]

### Paso 1: [Descripción del paso]
[Instrucciones detalladas]

### Paso 2: [Descripción del paso]
[Instrucciones detalladas]

### Paso 3: [Descripción del paso]
[Instrucciones detalladas]

## Desafíos Comunes y Soluciones

[Sección que aborde:
- Problemas típicos que se pueden encontrar
- Soluciones probadas
- Tips basados en experiencia personal]

### Desafío 1: [Descripción]
**Solución**: [Explicación de cómo resolver]

### Desafío 2: [Descripción]
**Solución**: [Explicación de cómo resolver]

## Métricas y Medición

[Cuando sea apropiado, incluir:
- Cómo medir el éxito de la implementación
- KPIs relevantes
- Herramientas de monitoreo]

## Case Study / Experiencia Personal

[Sección opcional con:
- Ejemplo real de implementación
- Resultados obtenidos
- Lessons learned
- Contextualizado en experiencia profesional cuando sea apropiado]

## Futuro y Tendencias

[Breve sección sobre:
- Hacia dónde se dirige el tema
- Tendencias emergentes
- Preparación para cambios futuros]

## Conclusión

[Resumen que incluya:
- Puntos clave del artículo
- Importancia del tema para profesionales de ciberseguridad
- Call to action (implementar, investigar más, etc.)
- Reflexión personal sobre el tema]

## Recursos Adicionales

[Lista de recursos para profundizar:
- Documentación oficial
- Papers académicos relevantes
- Herramientas mencionadas
- Cursos o certificaciones relacionadas]

---

**Tags**: #[Tag1] #[Tag2] #[Tag3] #CyberSecurity

---

## Guidelines para Uso del Template

### Estructura
- Usar headers jerárquicos (##, ###, ####)
- Mantener párrafos de 3-5 oraciones
- Incluir al menos 2-3 ejemplos prácticos
- Target: 1500-2500 palabras

### Estilo
- Tono profesional pero accesible
- Evitar jargon excesivo
- Incluir experiencia personal cuando sea relevante
- Usar bold para términos importantes
- Incluir código examples con syntax highlighting

### Contenido
- Información actual y verificada
- Referencias a herramientas específicas
- Ejemplos del mundo real
- Conexión con experiencia en BUPA Chile cuando sea apropiado

### SEO y Tags
- Título descriptivo y SEO-friendly
- Meta descripción clara (excerpt)
- 3-5 tags relevantes
- Headers que incluyan keywords principales

### Imágenes (cuando sea necesario)
- Screenshots de herramientas
- Diagramas de arquitectura
- Flowcharts de procesos
- Optimizadas para web

**Fecha**: [YYYY-MM-DD]
**Categoría**: [Cloud Security / Pentesting / Management / Tools / Compliance]
**Tiempo estimado de lectura**: [X minutos]`
            }
        ];
    }

    setupEventListeners() {
        // Navigation links
        const navLinks = document.querySelectorAll('[data-page]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.getAttribute('data-page');
                this.navigateToPage(page);
            });
        });

        // Category filters
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const category = e.target.getAttribute('data-category');
                this.filterByCategory(category);
                
                // Update active state
                filterButtons.forEach(btn => btn.classList.remove('filter-btn--active'));
                e.target.classList.add('filter-btn--active');
            });
        });

        // Search functionality
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value.toLowerCase();
                this.renderFilteredPosts();
            });
        }
    }

    setupMobileMenu() {
        const toggleButton = document.querySelector('.nav__toggle');
        const menu = document.querySelector('.nav__menu');
        
        if (toggleButton && menu) {
            toggleButton.addEventListener('click', () => {
                menu.classList.toggle('nav__menu--active');
            });
        }
    }

    navigateToPage(page) {
        // Hide all pages
        const pages = document.querySelectorAll('.page');
        pages.forEach(p => p.classList.remove('page--active'));

        // Show target page
        const targetPage = document.getElementById(`${page}-page`);
        if (targetPage) {
            targetPage.classList.add('page--active');
        }

        // Update navigation
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.classList.remove('nav__link--active');
            if (link.getAttribute('data-page') === page) {
                link.classList.add('nav__link--active');
            }
        });

        this.currentPage = page;

        // Close mobile menu if open
        const menu = document.querySelector('.nav__menu');
        if (menu) {
            menu.classList.remove('nav__menu--active');
        }

        // Scroll to top
        window.scrollTo(0, 0);
    }

    renderLatestPosts() {
        const container = document.getElementById('latest-posts-grid');
        if (!container) return;

        // Get latest 3 posts
        const latestPosts = this.posts
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3);

        container.innerHTML = latestPosts.map(post => this.createPostCard(post)).join('');
    }

    renderAllPosts() {
        const container = document.getElementById('posts-list');
        if (!container) return;

        container.innerHTML = this.posts
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(post => this.createPostCard(post))
            .join('');
    }

    renderFilteredPosts() {
        const container = document.getElementById('posts-list');
        if (!container) return;

        let filteredPosts = this.posts;

        // Filter by category
        if (this.currentCategory !== 'all') {
            filteredPosts = filteredPosts.filter(post => 
                post.category === this.currentCategory
            );
        }

        // Filter by search term
        if (this.searchTerm) {
            filteredPosts = filteredPosts.filter(post =>
                post.title.toLowerCase().includes(this.searchTerm) ||
                post.excerpt.toLowerCase().includes(this.searchTerm) ||
                post.tags.some(tag => tag.toLowerCase().includes(this.searchTerm))
            );
        }

        // Sort by date
        filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

        if (filteredPosts.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <h3>No se encontraron artículos</h3>
                    <p>Intenta con otros términos de búsqueda o categorías.</p>
                </div>
            `;
        } else {
            container.innerHTML = filteredPosts.map(post => this.createPostCard(post)).join('');
        }
    }

    filterByCategory(category) {
        this.currentCategory = category;
        this.renderFilteredPosts();
    }

    createPostCard(post) {
        const formattedDate = this.formatDate(post.date);
        
        return `
            <div class="post-card" onclick="app.openPost('${post.id}')">
                <div class="post-card__meta">
                    <span class="post-card__category">${post.category}</span>
                    <span class="post-card__date">${formattedDate}</span>
                </div>
                <h3 class="post-card__title">${post.title}</h3>
                <p class="post-card__excerpt">${post.excerpt}</p>
                <div class="post-card__tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
    }

    openPost(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (!post) return;

        // Navigate to post detail page
        this.navigateToPage('post-detail');

        // Render post content
        const container = document.getElementById('post-detail-content');
        if (container) {
            container.innerHTML = `
                <a href="#" class="back-to-blog" onclick="app.navigateToPage('blog')">
                    ← Volver al Blog
                </a>
                <div class="post-meta">
                    <span class="post-category">${post.category}</span>
                    <span class="post-date">${this.formatDate(post.date)}</span>
                </div>
                <div class="post-content">
                    ${this.renderMarkdown(post.content)}
                </div>
                <div class="post-tags">
                    <h4>Tags:</h4>
                    ${post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>
            `;
        }
    }

    renderMarkdown(content) {
        // Simple markdown rendering
        return content
            // Headers
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
            
            // Bold
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            
            // Code blocks
            .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            
            // Lists
            .replace(/^\- (.*$)/gim, '<li>$1</li>')
            .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
            .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
            
            // Line breaks
            .replace(/\n\n/g, '</p><p>')
            .replace(/^(?!<[hul]|<\/[hup]|<li|<pre|<code)(.+)$/gim, '<p>$1</p>')
            
            // Clean up
            .replace(/<p><\/p>/g, '')
            .replace(/<p>(<h[1-6]>)/g, '$1')
            .replace(/(<\/h[1-6]>)<\/p>/g, '$1')
            .replace(/<p>(<ul>)/g, '$1')
            .replace(/(<\/ul>)<\/p>/g, '$1')
            .replace(/<p>(<pre>)/g, '$1')
            .replace(/(<\/pre>)<\/p>/g, '$1');
    }

    formatDate(dateString) {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    }

    // Utility method to calculate reading time
    calculateReadingTime(content) {
        const wordsPerMinute = 200;
        const words = content.split(/\s+/).length;
        const minutes = Math.ceil(words / wordsPerMinute);
        return minutes;
    }
}

// Initialize the application
const app = new CybersecurityBlog();