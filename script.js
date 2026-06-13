const serviceData = {
  server: { title: 'Server Deployment', sub: 'Ubuntu · CentOS · Windows', items: ['OS installation & hardening', 'RBAC & firewall rules', 'Performance tuning & monitoring', 'Full documentation'] },
  storage: { title: 'Storage Solutions', sub: 'SAN/NAS · RAID · iSCSI', items: ['SAN/NAS design', 'RAID & LUN allocation', 'iSCSI/NFS/SMB shares', 'Data recovery & capacity planning'] },
  virt: { title: 'Virtualization', sub: 'VMware · Proxmox · Hyper-V', items: ['Hypervisor deployment & clustering', 'VM templates, HA/DRS', 'vSAN integration', 'Live migration & virtual networking'] },
  dc: { title: 'Data Center Setup', sub: 'Rack · Cabling · PDU', items: ['Physical rack layout', 'Patch panels & labeling', 'PDU & UPS integration', 'Environmental monitoring'] },
  siem: { title: 'SIEM Monitoring', sub: 'Wazuh · Zabbix', items: ['Centralized log collection', 'Custom rule sets', 'HIDS deployment', 'Alert integration'] },
  fw: { title: 'Firewall Deployment', sub: 'Fortinet · pfSense', items: ['Perimeter defense', 'ACL & application control', 'IPS/IDS', 'Traffic shaping & failover'] },
  ep: { title: 'Endpoint Protection', sub: 'EDR · MDM', items: ['Agent deployment', 'Ransomware isolation', 'MDM policies', 'Removable media control'] },
  va: { title: 'Vulnerability Assessment', sub: 'VAPT · Compliance', items: ['Asset discovery', 'Patch compliance scanning', 'Service & port analysis', 'ISO 27001 mapping'] },
  pacs: { title: 'PACS Deployment', sub: 'dcm4chee · J4Care', items: ['PACS server install', 'DICOM worklist', 'Storage tiers', 'HL7 integration'] },
  dicom: { title: 'DICOM Routing', sub: 'Low‑Latency · HA', items: ['Multi‑modality router', 'Automated rules', 'Redundant archive', 'Off‑site replication'] },
  ris: { title: 'RIS/HIS Integration', sub: 'HL7 · FHIR', items: ['API integration', 'Patient sync', 'Report workflow', 'Billing automation'] },
  solar: { title: 'Solar EPC', sub: 'On‑Grid · Hybrid', items: ['Load calculation', 'Tier‑1 procurement', 'Inverter sync', 'Earthing & yield monitoring'] },
  netmeter: { title: 'Net Metering', sub: 'NEPRA · DISCO', items: ['Application filing', 'Utility testing', 'Bidirectional meter', 'Credit auditing'] },
  elec: { title: 'Electrical Solutions', sub: 'UPS · Generator · Earthing', items: ['DB design', 'ATS/AMF sync', 'UPS sizing', 'Lightning protection'] },
  helpdesk: { title: 'Helpdesk Support', sub: 'L1/L2/L3 · SLA', items: ['Tiered support', 'Defined SLAs', 'ITSM ticketing', 'Onboarding workflows'] },
  asset: { title: 'Asset Management', sub: 'Snipe‑IT', items: ['IT asset audit', 'Lifecycle tracking', 'License validation', 'QR tagging'] },
  backup: { title: 'Backup & DR', sub: 'Veeam · M365', items: ['M365/Workspace backup', 'Cloud tiering', 'DRP documentation', 'Monthly testing'] },
  pm: { title: 'Preventative Maintenance', sub: 'Patching · Firmware', items: ['Monthly patch cycles', 'Firmware updates', 'OS optimization', 'Health scripts'] },
  web: { title: 'Web Applications', sub: 'React · Node', items: ['Custom secure apps', 'Modern frameworks', 'Database design', 'API security'] },
  portal: { title: 'Client & Vendor Portals', sub: 'Portals · APIs', items: ['Secure onboarding', 'Asset submission', 'API synchronization', 'Admin dashboards'] },
  train1: { title: 'VMware & Linux', sub: 'Infrastructure Labs', items: ['Hypervisor setup', 'Linux kernel', 'Cluster management', 'Backup strategies'] },
  train2: { title: 'PACS Admin', sub: 'Healthcare IT', items: ['DICOM schema', 'dcm4chee config', 'Image compression', 'DR drills'] },
  train3: { title: 'Cybersecurity Awareness', sub: 'Staff Training', items: ['Phishing campaigns', 'Password hygiene', 'Social engineering', 'Policy review'] }
};

function openModal(key) {
  const d = serviceData[key];
  if (!d) return;
  document.getElementById('modal-title').innerText = d.title;
  document.getElementById('modal-sub').innerText = d.sub;
  document.getElementById('modal-body').innerHTML = d.items.map(i => `<li>▸ ${i}</li>`).join('');
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal')) closeModal();
});

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function submitForm() {
  const name = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  if (!name || !email) {
    alert('Please enter your name and email address.');
    return;
  }
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
  document.getElementById('fname').value = '';
  document.getElementById('femail').value = '';
  document.getElementById('fphone').value = '';
  document.getElementById('fservice').value = '';
  document.getElementById('fmsg').value = '';
}

window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section[id]').forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});